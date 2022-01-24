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
    /* axios
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
      }); */
    console.log("this is listID" + list_ID);
    console.log("this is bookId" + book_ID);
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
      });
  }

  const handleClick = () => {
    deleteEntry(book_ID, list_ID);
  };

  /* useEffect(() => {
    (async () => {
      console.log("2");
      let user_lists;
      try {
        user_lists = await getUserlists(); //grab from Backend!
        console.log("bring me to me life" + user_lists.data);
        console.log(user_lists.data);
        console.log(user_lists);
      } catch (error) {
        console.log(error);
        //         user_lists = [];
         
      }
      setUserlists(user_lists.data);
    })();
  }, []); */

  return (
    <div className="button">
      <Button variant="danger" onClick={handleClick}>
        Delete from list
      </Button>
    </div>
  );
}

export default DeleteButton;
