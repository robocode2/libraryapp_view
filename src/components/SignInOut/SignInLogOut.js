import React, { useContext } from "react";
//import { AuthContext } from "../../AuthContext";
import app from "../../firebase";

const SignInLogOut = () => {
  return (
    <div>
      console.log(currentUser);
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default SignInLogOut;
