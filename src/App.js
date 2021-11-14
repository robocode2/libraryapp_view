import { useState, useEffect } from "react";
import "./App.css";
import BookCard from "./BookCard";

function App() {
  const [allBooks, setAllUBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      let bookData;
      try {
        const response = await fetch("http://localhost:3001/books"); //grab from Backend!
        bookData = await response.json();
      } catch (error) {
        console.log(error);
        bookData = [];
      }
      setAllUBooks(bookData);
      setBooks(bookData);
    })();
  }, []);

  /* const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    //const filteredBooks = allBooks.filter(book => (`${book.title} ${book.description}`.toLowerCase().includes(value)));
    const filteredBooks = allBooks.filter((book) =>
      `${book.title}`.toLowerCase().includes(value)
    );

    setBooks(filteredBooks);
  }; */

  return (
    <div className="App">
      <h1>Book Cards</h1>
      {/* <input
        className="search-box"
        onInput={filterCards}
        placeholder="Search..."
      /> */}
      <div className="cards-container">
        {books.map((book, index) => (
          <BookCard key={index} bookData={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
