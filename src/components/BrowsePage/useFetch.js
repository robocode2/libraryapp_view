import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const auth = firebase.auth();
  const user = auth.currentUser;

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const token = user && (await user.getIdToken());
      //const res = await axios.get("http://localhost:8080/books");

      const res = await axios.get(
        "https://library-app-code.herokuapp.com/books",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      await setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
