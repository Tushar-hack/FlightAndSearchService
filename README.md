# Welcomne to flights Services

## Project Setup
 - clone the project on your local.
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following environment variable
    - 'PORT=3000'
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json :

 ```
 {
    "development": {
    "username": "root",
    "password": "123456",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 }
 ```
 - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights.
  - A City has many airports but one airports belongs to a city.
  - One airport can have many flights, but a flight can belong to one airport.


## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, cityId, Address, created_at, updated_at
