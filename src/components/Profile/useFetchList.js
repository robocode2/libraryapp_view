import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function useFetchlist({ list_ID }) {
  const [listentries, setListentries] = useState([]);
  const [listID, setlistID] = useState(list_ID);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getListentries(list_ID) {
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    try {
      const entries = await axios.get(
        "http://localhost:8080/entries/" + list_ID,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      /*  const entries = await axios.get(
        "https://library-app-code.herokuapp.com/entries/" + list_ID,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      ); */
      return entries;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      let listEntries;
      try {
        listEntries = await getListentries(list_ID);
        setListentries(listEntries.data);
      } catch (error) {
        console.log(error);
        listEntries = [];
        setListentries(listEntries);
      }
    })();
  }, [list_ID]);

  return { loading, error, listentries };
}

export default useFetchlist;
