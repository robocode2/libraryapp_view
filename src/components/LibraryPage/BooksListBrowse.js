import { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "./useFetch";
import BookCard from "../BookCard/AddBookCard";

function BooksListBrowse() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="App">
      <h1>Library</h1>
      <input type="text" value={query} onChange={handleChange} />
      <div className="container">
        <div className="row row-cols-3  row-cols-md-3">
          {list.map((item, index) => (
            <div key={index} id="cardItem" className="col-xs-1">
              <BookCard key={index} bookData={item} />
            </div>
          ))}
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default BooksListBrowse;
