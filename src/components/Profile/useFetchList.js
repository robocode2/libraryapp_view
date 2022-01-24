import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function useFetchlist({ list_ID }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [listentries, setListentries] = useState([]);
  const [listID, setlistID] = useState(list_ID);
  console.log(`this is lisiiiiiiiiiitid ${list_ID}`);
  const auth = firebase.auth();
  const user = auth.currentUser;

  async function getListentries(list_ID) {
    console.log("3");
    const auth = firebase.auth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    console.log("we are hereeeeeeeeeee" + list_ID);
    try {
      const entries = await axios.get(
        "http://localhost:8080/entries/" + list_ID,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      /* const entries = await axios.get("http://localhost:8080/entries/1", {
        headers: {
          Authorization: "Bearer " + token,
        },
      }); */
      console.log("did i do rightsfsfsfsfsfasf", entries);
      return entries;
    } catch (error) {
      console.log(error);
    }
  }
  /* const entries = await axios.get(
      `https://library-app-code.herokuapp.com/entries/6}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ); */

  /*  await setList(entries.data); */

  /* 
  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const token = user && (await user.getIdToken());
      //const res = await axios.get("http://localhost:8080/books");

      console.log(list_ID);
      const res = await axios.get(
        `https://library-app-code.herokuapp.com/entries/${list_ID}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res.data);
      await setList(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, list_ID); */

  useEffect(() => {
    (async () => {
      console.log("58235562");
      let listEntries;
      try {
        listEntries = await getListentries(list_ID);
        console.log("5828 finished" + listEntries);
      } catch (error) {
        console.log(error);
        listEntries = [];
      }
      setListentries(listEntries.data);
    })();
  }, [list_ID]);

  return { loading, error, listentries };
}

export default useFetchlist;