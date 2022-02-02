import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import ListBrowser from "./ListBrowser";
import axiosClient from "../../axios";

function ListsContainer() {
  const [userlists, setUserlists] = useState([]);
  const [value, setValue] = useState("1");

  const handleSelect = (e) => {
    setValue(e);
  };

  async function getUserlists() {
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

  useEffect(() => {
    (async () => {
      let user_lists;
      try {
        user_lists = await getUserlists(); //grab from Backend!
      } catch (error) {
        console.log(error);
        /*         user_lists = [];
         */
      }
      setUserlists(user_lists.data);
    })();
  }, []);

  useEffect(() => {
    renderListBrowser(value);
  }, [value]);

  function renderListBrowser(value) {
    <ListBrowser list_ID={value}></ListBrowser>;
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
        </Dropdown.Menu>
      </Dropdown>
      <ListBrowser list_ID={value}></ListBrowser>;
      {/* {renderListBrowser(value)} */}
    </div>
  );
}

export default ListsContainer;
