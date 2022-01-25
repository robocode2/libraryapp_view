import { useState, useRef, useEffect, useCallback } from "react";
import TestCard from "../BookCard/TestCard";
import CardDeleteButton from "../BookCard/CardDeleteButton";
import axios from "axios";
import useFetchbooks from "./useFetchBooks";

function ListBrowser({ list_ID }) {
  const books = useFetchbooks({ list_ID });
  const loader = useRef(null);

  return (
    <div className="List books">
      <h2>List books</h2>
      {/* if empty, render "List is empty" if loading? if full */}
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
