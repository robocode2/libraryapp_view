import React from "react";
import Button from "react-bootstrap/Button";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axiosClient from "../../axios";

function DeletefromList({ book_ID, list_ID }) {
  async function deleteEntry(book_ID, list_ID) {
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    axiosClient
      .post(
        `/entries/delete`,
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

export default DeletefromList;
