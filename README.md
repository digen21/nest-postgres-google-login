<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">NestJs Boilerplate code with <br/> Postgresql Database setup with Migrations</p>
   
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Project setup

```bash
$ yarn install
```

```bash
# copy .env.example file and create .env file
# add required values in .env
```

<br/>

## Setup PostgreSQL Database With Migration

```bash
# add the required creds in .env file
$ yarn run setup:db
# In terminal you will see the database successfully created messafe

# NOTE: default schema is set to app_public in  -> configs/typorm.ts

# to create new migration run:
$ npm run migration:create --name<name_of_migration_file_here>

# to generate migration from entity created:
$ npm run migration:generated --name<name_of_migration_file_here>

# to run generated migration:
$ npm run migration:run

# to revert committed migration:
$ npm run migration:revert

# if check your database, you will see migration table is created, which contains the migration details
```

<br/>

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

<br/>

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
