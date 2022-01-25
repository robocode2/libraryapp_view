import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAoaByA2PyqiTll790nWqEWE12tnMFI29s",
  authDomain: "libraryapp-d77b7.firebaseapp.com",
  projectId: "libraryapp-d77b7",
  storageBucket: "libraryapp-d77b7.appspot.com",
  messagingSenderId: "659213085806",
  appId: "1:659213085806:web:61af9754ad89fd83458a7f",
  measurementId: "G-HH9837XGH8",
});

export const auth = app.auth();

export default app;
