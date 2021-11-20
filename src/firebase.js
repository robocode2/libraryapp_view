import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import FirebaseAuth and firebase.

// Configure Firebase.
//const config = {
/*  apiKey: "AIzaSyAoaByA2PyqiTll790nWqEWE12tnMFI29s",
  authDomain: "libraryapp-d77b7.firebaseapp.com",
  projectId: "libraryapp-d77b7",
  storageBucket: "libraryapp-d77b7.appspot.com",
  messagingSenderId: "659213085806",
  appId: "1:659213085806:web:61af9754ad89fd83458a7f",
  measurementId: "G-HH9837XGH8", */

//apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//messagingSenderId: process.env.REACT_APP_MFIREBASE_ESSAGING_SENDER_ID,
//appId: process.env.REACT_APP_FIREBASE_APP_ID,
//measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
//};

//firebase.initializeApp(config);

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
