import { useRef } from "react";
import CardDeleteButton from "../BookCard/RemoveBookCard";
import useFetchbooks from "./hooks/useFetchBooks";

function ListBrowser({ list_ID }) {
  const books = useFetchbooks({ list_ID });
  const loader = useRef(null);

  return (
    <div className="List books">
      {/* if empty, render "List is empty" if loading? if full */}
      <div className="container">
        <div className="row row-cols-3  row-cols-md-3">
          {books.map((item, index) => (
            <div key={index} id="cardItem" className="col-xs-1">
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
