import React, { useContext, useEffect, useState } from "react";
import app from "./firebase";
import "firebase/auth";
import firebase from "firebase/compat/app";

export const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);

  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
      });
  };

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
      console.log(user);
      console.log("ich bin der User");
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  const values = {
    currentUser,
    pending,
    logout,
  };
  return (
    <AuthContext.Provider value={{ currentUser, pending, logout }}>
      {!pending && children}
    </AuthContext.Provider>
  );
};
