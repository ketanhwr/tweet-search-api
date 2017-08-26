# tweet-search-api

A REST API which allows a user to create, read, update and delete tweets.

## Setup

- Clone the repository
- Copy over `config.example.json` to `config.json` and edit attributes accordingly.
- Install `yarn` (or `npm`) and run `yarn install` (or `npm install`) to install dependencies.
- Run `yarn start` or `npm start` to start the Restify server.

## Technologies Used

- [Restify](http://restify.com/) for server and routing.
- [Mongoose ODM](http://mongoosejs.com/) for handling database queries over MongoDB.

## Routes

I referred the Twitter API for the standards. Just like Twitter API, all the values should be sent via URL parameters.

- `POST /tweets/` - Insert a new tweet in the database.
- `GET /tweets/:id` - Fetch the tweet with `:id` as key.
- `PUT /tweets/:id` - Update the tweet with `:id` as key.
- `DELETE /tweets/:id` - Delete the tweet with `:id` as key.
