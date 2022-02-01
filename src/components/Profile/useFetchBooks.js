import React from "react";
import { useState, useEffect, useCallback } from "react";
import axiosClient from "../../axios";
import useFetchlist from "./useFetchList";

function useFetchbooks({ list_ID }) {
  /* const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); */

  const { loading, error, listentries } = useFetchlist({ list_ID });

  const [books, setBooks] = useState([]);

  function getBookIds() {
    let bookIds = [];
    for (var i = 0; i < listentries.length; i++) {
      bookIds.push(listentries[i]["BookId"]);
    }
    return bookIds;
  }

  const bookies = useCallback(async () => {
    let bookIds = getBookIds(listentries);
    let response = [];
    for (var i = 0; i < bookIds.length; i++) {
      console.log("book number" + bookIds[i]);
      const res = await axiosClient.get("/books/" + bookIds[i]);
      response.push(res.data);
    }
    await setBooks(response);
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
