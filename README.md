# Project Title

### Library CODE App

- https://librarycode.netlify.app/
- https://library-app-code.herokuapp.com/

## Project Description

A simple “book list” or “bookshelf” web app where a user can login/sign up using Firebase as an authentication service and be able to create “lists” such as favorites or plan-to-read list, etc.. And add/remove books to these lists accordingly.

## Project Development Environment Set-up

- To run the project locally :

A firebase project is needed
on the frontend :

on the backend : Firebase Admin SDK
Add to .env file

2 instances of PostgreSQL
Add to .env file

Changing data source from heroku to localhost

How to run project locally after providing above :

- Running migrations
- to start server : npm start

- to run React-App : npm start
- to build React-App : npm run build

How to run tests :

- npm test

## Project Stack

- Backend : PostgreSQL, Sequelize (ORM), NodeJS, Express, Firebase SDK
- Frontend : ReactJS, Firebase
- Testing : Jest, Supertest
- Deployment : Heroku (Backend), Netlify (Frontend)

## Project Request Flow

![Project architecture](https://i.ibb.co/YdK5HW2/library-app.jpg)

## Project ER Model

![ER Model](https://i.ibb.co/kQvm1R3/Library-app-vpd-3.png)

## Project API Endpoints

**React App**

- \_/signIn : access Firebase pop-up sign-in component, redirects to
- \_/browse : shows all books in database
- \_/profile : view own user profile and lists
- \_/signOut : signs user out, redirects to /signIn

**API Resources**

- \_/books/create
- \_/books/:id
- \_/books
- \_/lists : gets all user's lists
- \_/lists/create
- \_/lists/:id
- \_/entries/create
- \_/entries/:id

## In the project directory, you can run:

### `npm start`
