import React from "react";
import { useEffect, useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useData } from "../../DataContext";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axiosClient from "../../axios";

function DropdownListAddButton({ book_ID }) {
  const [user_lists, setUserlists] = useState([]);
  const [value, setValue] = useState("");

  const { currentUser } = useAuth();
  //const { userLists, pending } = useData();

  async function postEntry(list_ID) {
    const token = currentUser && (await currentUser.getIdToken());
    axiosClient
      .post(
        `/entries/create`,
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
    const lists = await axiosClient.get("/lists", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return lists;
  }

  /* useEffect(() => {
    (async () => {
      try {
        setUserlists(userLists);
      } catch (error) {
        console.log(error);
        setUserlists([]);
      }
    })();
  }, [userLists]); */

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
          {user_lists.map((list, index) => (
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
