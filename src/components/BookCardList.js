import React from "react";
import axios from "axios";
import BookCard from "./BookCard/BookCard";
import { useEffect, useState } from "react";
import BootstrapCard from "./BootstrapCard";

export const BookCardList = ({ token }) => {
  const [allBooks, setAllUBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      let bookData;
      try {
        const response = await fetch("http://localhost:8080/books"); //grab from Backend!
        bookData = await response.json();
      } catch (error) {
        console.log(error);
        bookData = [];
      }
      setAllUBooks(bookData);
      setBooks(bookData);
    })();
  }, []);

  return (
    <div className="BrowsePage">
      <div className="Bookcards">
        <h1>Book Cards</h1>
        {/* <input
            className="search-box"
            onInput={filterCards}
            placeholder="Search..."
          /> */}
        <div className="cards-container">
          {books.map((book, index) => (
            <BootstrapCard key={index} bookData={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCardList;
