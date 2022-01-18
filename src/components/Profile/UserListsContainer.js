import React from "react";
import BookCard from "./BookCard/BookCard";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axios from "axios";

const UserListsContainer = ({ user }) => {
  const [userlists, setUserlists] = useState([]);
  const [value, setValue] = useState("");

  async function getUserlists() {
    console.log("3");
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    const lists = await axios.get("http://localhost:8080/lists", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log("did i do right", lists);
    return lists;
  }

  useEffect(() => {
    (async () => {
      console.log("2");
      let user_lists;
      try {
        user_lists = await getUserlists(); //grab from Backend!
        console.log("bring me to me life" + user_lists.data);
      } catch (error) {
        console.log(error);
        /*         user_lists = [];
         */
      }
      setUserlists(user_lists.data);
    })();
  }, []);

  return (
    <div className="BrowsePage">
      <div className="Bookcards">
        <h1>Book Cards</h1>
        {/* <input
            className="search-box"
            onInput={filterCards}
            placeholder="Search..."
          /> */}
        <div className="cards-container">
          {books.map((book, index) => (
            <BookCard key={index} bookData={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserListsContainer;
