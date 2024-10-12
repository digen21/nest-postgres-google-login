//script file to setup the database.
const inquirer = require('inquirer');
const pg = require('pg');
require('dotenv/config');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const setupdb = async () => {
  const {
    DATABASE_NAME,
    ROOT_DATABASE_URL,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_PASSWORD,
    DATABASE_USERNAME,
  } = process.env;

  const confirm = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'CONFIRM',
      default: false,
      message: `We're going to drop database:
    
      - database ${DATABASE_NAME}`,
    },
  ]);

  if (!confirm.CONFIRM) {
    console.error('Confirmation failed; exiting');
    process.exit(1);
  }

  console.log('Installing or reinstalling the roles and database...');
  const pgPool = new pg.Pool({
    connectionString: `${ROOT_DATABASE_URL}`,
  });

  pgPool.on('error', (err) => {
    // Ignore
    console.log(
      'An error occurred whilst trying to talk to the database: ' + err.message,
    );
  });

  // Wait for PostgreSQL to come up
  let attempts = 0;
  while (true) {
    try {
      await pgPool.query('select true as "Connection test";');
      break;
    } catch (e) {
      if (e.code === '28P01') {
        throw e;
      }
      attempts++;
      if (attempts <= 30) {
        console.log(
          `Database is not ready yet (attempt ${attempts}): ${e.message}`,
        );
      } else {
        console.log(`Database never came up, aborting :(`);
        process.exit(1);
      }
      await sleep(1000);
    }
  }

  const client = await pgPool.connect();

  try {
    // Drop the database if it already exists
    await client.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME};`);

    // Create a new database
    await client.query(`CREATE DATABASE ${DATABASE_NAME}`);

    console.log('Database created.');
    console.log(`Connecting to newly created ${DATABASE_NAME}`);

    // Connect to the newly created database
    const connectedClient = new pg.Client({
      user: DATABASE_USERNAME,
      host: DATABASE_HOST,
      database: DATABASE_NAME,
      password: DATABASE_PASSWORD,
      port: DATABASE_PORT,
    });

    await connectedClient.connect();

    // Drop the schema if it already exists
    await connectedClient.query(`DROP SCHEMA IF EXISTS app_public CASCADE;`);

    // Create a new schema
    await connectedClient.query(`CREATE SCHEMA app_public;`);
    console.log('Schema created.');
  } catch (e) {
    console.error('Error setting up database:', e);
  } finally {
    await client.release();
  }

  await pgPool.end();

  console.log(`✅ Setup success`);
};

setupdb().finally(() => process.exit());
