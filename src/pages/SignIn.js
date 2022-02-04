import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/browse",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const SignInScreen = () => {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignInScreen;
