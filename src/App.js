import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./Home";
import { AuthProvider } from "./AuthContext";
//import BookCardList from "./components/BookCardList";
import SignInScreen from "./SignInScreen";
//import Home from "./Home";
import UserProfile from "./components/Profile/UserProfile";
//import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import app from "./firebase";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import PrivateRoute from "./PrivateRoute";

import Layout from "./components/BrowsePage/Layout";
import Dashboard from ".//Dashboard";
import SignInLogOut from "./SignInLogOut";
import BooksListBrowse from "./components/BrowsePage/BooksListBrowse";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    app.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log("hi");
        console.log(userCred);

        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/scrooll" element={<BooksListBrowse />} />

        <Route exact path="/browse" element={<Layout />} />
        <Route exact path="/books" element={<UserProfile token={token} />} />
        <Route exact path="/signin" element={<SignInScreen />} />
        <Route exact path="/logout" element={<SignInLogOut />} />
      </Routes>
    </Router>
  );
};

export default App;
