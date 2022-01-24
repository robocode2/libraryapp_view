import { useState, useRef, useEffect, useCallback } from "react";
import TestCard from "../BookCard/TestCard";
import CardDeleteButton from "../BookCard/CardDeleteButton";
import axios from "axios";
import useFetchbooks from "./useFetchBooks";

function ListBrowser({ list_ID }) {
  /* console.log(
    ` i just want to know if it's being passed properly ${listentries}`
  ); */
  const books = useFetchbooks({ list_ID });
  console.log(`thousand oceans pass ${books}`);
  //console.log(`lisentries ${listentries}`);
  const loader = useRef(null);
  console.log(`goodmorning sunshine + ${list_ID}`);

  /*   const [bookIds, setBooks] = useState([]);
  const [list, setList] = useState[[]]; */

  /* 
  async function getBookIds(listentries) {
    let bookIds = [];
    for (var i = 0; i < listentries.length; i++) {
      console.log(listentries[i]);
      console.log(listentries[i]["bookId"]);
      bookIds.push(listentries[i]["bookId"]);
    }
    console.log(bookIds);
    await setBooks[bookIds];
    return bookIds;
  }

  async function getBooks(bookIds) {
    let response = [];
    for (var i = 0; i < bookIds.length; i++) {
      const res = await axios.get("http://localhost:8080/books/" + bookIds[i]);

      console.log(res);
      response.push(res);
    }
    console.log(bookIds);
    await setList[response];
    return response;
  } */
  /* 
  useEffect(() => {
    (async () => {
      console.log("bookids");
      let book_ids;
      let book_objs;
      try {
        book_ids = await getBookIds(listentries); //grab from Backend!
        book_objs = await getBooks(book_ids);
        console.log("bring me to my books" + book_ids);
      } catch (error) {
        console.log(error);
        //         user_lists = [];
         
      }
      setBooks(book_ids);
      setList(book_objs);
    })();
  }, []); */

  //const [listEntries, setlistEntries] = useState([]);
  /* 

  

  const entries = await axios.get(
    `http://localhost:8080/entries/:id=${list_ID}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    } */

  return (
    <div className="List books">
      <h2>List books</h2>

      <div className="container">
        <div className="row row-cols-3  row-cols-md-3">
          {books.map((item, index) => (
            <div key={index} id="cardItem" className="col-xs-1">
              {/*  //<TestCard key={index} bookData={item} /> */}
              <CardDeleteButton key={index} bookData={item} listId={list_ID} />
            </div>
          ))}
        </div>
      </div>
      {/*  {loading && <p>Loading...</p>}
      {error && <p>Error!</p>} */}
      <div ref={loader} />
    </div>
  );
}

export default ListBrowser;
