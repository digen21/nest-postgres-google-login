import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const isDev = process.env.NODE_ENV === 'development';

const config = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: `${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  logging: true,
  schema: 'app_public',
  applicationName: 'tshirt_store',
  ssl: !isDev,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
