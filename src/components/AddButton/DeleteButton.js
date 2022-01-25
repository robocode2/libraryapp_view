import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function DeleteButton({ book_ID, list_ID }) {
  async function deleteEntry(book_ID, list_ID) {
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    axios
      .post(
        `https://library-app-code.herokuapp.com/entries/delete`,
        {
          list_id: list_ID,
          book_id: book_ID,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
    /* 
    axios
      .post(
        `http://localhost:8080/entries/delete`,
        {
          list_id: list_ID,
          book_id: book_ID,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      }); */
  }

  const handleClick = () => {
    deleteEntry(book_ID, list_ID);
  };

  return (
    <div className="button">
      <Button variant="danger" onClick={handleClick}>
        Delete from list
      </Button>
    </div>
  );
}

export default DeleteButton;
