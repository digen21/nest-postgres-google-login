<p style="display: flex; justify-content: center; gap: 20px;">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" />
  <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" width="100" alt="Google logo" />
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


  <p align="center">NestJs Boilerplate code with <br/> Google Login</p>
   
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

## Steps to enable google login

```bash
# open in browser & open following link
$ https://console.cloud.google.com/projectcreate?pli=1

# Follow the instruction from below link
$ https://medium.com/@flavtech/google-oauth2-authentication-with-nestjs-explained-ab585c53edec


# NOTE: In the last download the google client file.
# Add require values in .env file

```

<br/>

## Google Login

```bash
# open in browser
$ http://localhost:<port>/api/auth/google

# this will redirect to google login page.
# choose/add google account & it will return user info in response
```