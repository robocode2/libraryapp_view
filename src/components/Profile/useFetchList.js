import React from "react";
import { useState, useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axiosClient from "../../axios";

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
      const entries = await axiosClient.get("/entries/" + list_ID, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
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
