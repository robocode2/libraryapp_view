// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
  apiKey: "AIzaSyAoaByA2PyqiTll790nWqEWE12tnMFI29s",
  authDomain: "libraryapp-d77b7.firebaseapp.com",
  projectId: "libraryapp-d77b7",
  storageBucket: "libraryapp-d77b7.appspot.com",
  messagingSenderId: "659213085806",
  appId: "1:659213085806:web:61af9754ad89fd83458a7f",
  measurementId: "G-HH9837XGH8",
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
