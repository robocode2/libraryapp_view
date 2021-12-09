import React, { useEffect } from "react";
import axios from "axios";
import BookCardList from "./BookCardList";
import app from "../firebase";

const UserProfile = ({ token }) => {
  //avatar or username on the left side
  //component to grab user's lists and iterate over them
  //grab User's lists
  //Visualise each list in div

  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    const res = await axios.get("http://localhost:8080/books", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(`'hsafasgasgasgasgeqei' + ${res.data}`);
  };

  return (
    <div>
      <h1>List of books</h1>
      <button onClick={() => app.auth().signOut()}>Log out</button>
    </div>
  );
};

export default UserProfile;
