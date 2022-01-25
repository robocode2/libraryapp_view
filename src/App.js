import React from "react";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInScreen from "./components/SignInOut/SignInScreen";
import Layout from "./components/BrowsePage/Layout";
import "firebase/auth";
import app from "./firebase";
import UserPage from "./components/Profile/UserPage";
import { AuthContext } from "./AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  const { currentUser, pending, logout } = useContext(AuthContext);

  /* const [token, setToken] = useState("");

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
  }, []); */

  console.log("did it work" + currentUser);
  console.log(currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/profile" element={<UserPage />} />
          <Route exact path="/browse" element={<Layout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
