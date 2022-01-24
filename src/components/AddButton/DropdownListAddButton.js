import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function DropdownListAddButton({ book_ID }) {
  const [userlists, setUserlists] = useState([]);
  const [value, setValue] = useState("");

  async function postEntry(list_ID) {
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    /* axios
      .post(
        `https://library-app-code.herokuapp.com/entries/create`,
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

    axios
      .post(
        `http://localhost:8080/entries/create`,
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

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
    postEntry(e);
  };

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

    /* const lists = await axios.get(
      "https://library-app-code.herokuapp.com/lists",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ); */
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
        console.log(user_lists.data);
        console.log(user_lists);
      } catch (error) {
        console.log(error);
        /*         user_lists = [];
         */
      }
      setUserlists(user_lists.data);
    })();
  }, []);

  function renderListButtons() {
    console.log("1");
    console.log(userlists);

    //userlists.map((list, index) => console.log(list));

    userlists.map((list, index) => (
      <Dropdown.Item eventKey={list.id}>{list.name}</Dropdown.Item>
    ));
  }

  return (
    <div className="button">
      <Dropdown
        className="d-inline mx-2"
        autoClose="outside"
        title="Dropdown right"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Clickable Inside
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {userlists.map((list, index) => (
            <Dropdown.Item key={index} eventKey={list.id}>
              {list.name}
            </Dropdown.Item>
          ))}
          {/*  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownListAddButton;
