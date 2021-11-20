import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Home";
import { AuthProvider } from "./AuthContext";
//import BookCardList from "./components/BookCardList";
import SignInScreen from "./SignInScreen";
//import Home from "./Home";
import UserProfile from "./components/UserProfile";
//import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import app from "./firebase";

/* const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignInScreen} />
        <Route exact path="/signup" component={SignInScreen} />
      </Routes>
    </AuthProvider>
  );
}; */

const App = () => {
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    app.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        console.log("look here for userCred");
        console.log(userCred);

        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, []);

  return (
    <AuthProvider>
      <div className="App">
        {auth ? (
          <UserProfile token={token} />
        ) : (
          <SignInScreen>currentUser</SignInScreen>
        )}

        <Routes>
          {/*  <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
          <Route exact path="/" component={SignInScreen} />
          <Route exact path="/signedIn" component={UserProfile} />
          <Route exact path="/signup" component={SignInScreen} />
        </Routes>
        {/*  <SignInScreen>currentUser</SignInScreen> */}
      </div>
    </AuthProvider>
  );
};

export default App;
