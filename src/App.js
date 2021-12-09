import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import PrivateRoute from "./PrivateRoute";

import Layout from "./Layout";
import Dashboard from ".//Dashboard";
import SignInLogOut from "./SignInLogOut";
import BookCardList from "./components/BookCardList";
import BootstrapCard from "./components/BootstrapCard";

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
      <Layout>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/bootstrap" element={<BootstrapCard />} />

          <Route exact path="/browse" element={<BookCardList />} />
          <Route exact path="/books" element={<UserProfile token={token} />} />
          <Route exact path="/signin" element={<SignInScreen />} />
          <Route exact path="/logout" element={<SignInLogOut />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
