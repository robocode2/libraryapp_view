import React from "react";
import { useState, useEffect, useCallback } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axiosClient from "../../axios";

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
      const res = await axiosClient.get("/books");
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
