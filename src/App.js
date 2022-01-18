import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInScreen from "./components/SignInOut/SignInScreen";
import UserProfile from "./components/Profile/UserProfile";
import Layout from "./components/BrowsePage/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import SignInLogOut from "./components/SignInOut/SignInLogOut";
import BooksListBrowse from "./components/BrowsePage/BooksListBrowse";
import "firebase/auth";
import app from "./firebase";

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
