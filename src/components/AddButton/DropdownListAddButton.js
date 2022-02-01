import React from "react";
import { useEffect, useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function DropdownListAddButton({ book_ID }) {
  const [userlists, setUserlists] = useState([]);
  const [value, setValue] = useState("");
  const { currentUser, pending, logout } = useContext(AuthContext);

  async function postEntry(list_ID) {
    const token = currentUser && (await currentUser.getIdToken());
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
    //const token = currentUser && (await currentUser.getIdToken());
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());

    const lists = await axios.get("http://localhost:8080/lists", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    /*  const lists = await axios.get(
      "https://library-app-code.herokuapp.com/lists",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ); */
    return lists;
  }

  useEffect(() => {
    (async () => {
      let user_lists;
      try {
        user_lists = await getUserlists(); //grab from Backend!
        setUserlists(user_lists.data);
      } catch (error) {
        console.log(error);
        setUserlists([]);
      }
    })();
  }, []);

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
