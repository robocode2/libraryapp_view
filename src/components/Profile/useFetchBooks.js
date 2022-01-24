import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useFetchlist from "./useFetchList";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function useFetchbooks({ list_ID }) {
  /* const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); */

  const { loading, error, listentries } = useFetchlist({ list_ID });

  const [books, setBooks] = useState([]);
  //const [listEntries, setEntries] = useState(listentries);

  function getBookIds() {
    console.log("here are the list Entries" + listentries);
    let bookIds = [];
    for (var i = 0; i < listentries.length; i++) {
      console.log(listentries[i]);
      console.log(listentries[i]["bookId"]);
      bookIds.push(listentries[i]["bookId"]);
    }
    console.log(bookIds);
    return bookIds;
  }

  /*  async function getBooks() {
    let bookIds = getBookIds(listEntries);
    let response = [];
    for (var i = 0; i < bookIds.length; i++) {
      const res = await axios.get("http://localhost:8080/books/" + bookIds[i]);

      console.log(res);
      response.push(res);
    }
    console.log(bookIds);
    await setBooks[response];
    return response;
  }
 */
  const bookies = useCallback(async () => {
    let bookIds = getBookIds(listentries);
    console.log("the most important thing" + bookIds);
    let response = [];
    for (var i = 0; i < bookIds.length; i++) {
      console.log("book number" + bookIds[i]);
      const res = await axios.get("http://localhost:8080/books/" + bookIds[i]);

      console.log(res);
      response.push(res.data);
    }
    console.log(bookIds);
    await setBooks(response);
    console.log(response);
    return response;
  }, [listentries]);

  useEffect(() => {
    bookies();
    console.log(`final bookies`);
    console.log(books);
  }, [bookies]);

  return books;
}

export default useFetchbooks;
