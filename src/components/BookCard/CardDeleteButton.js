import React from "react";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import DeleteButton from "../AddButton/DeleteButton";

export const CardDeleteButton = ({ bookData, listId }) => {
  <style type="text/css">
    {`
    .card-imgsize {
      width: 100px;
    }
    `}
  </style>;
  const bookCover = `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-L.jpg`;

  return (
    <Card style={{ width: "11rem" }}>
      <Card.Img className="card-imgsize" variant="top" src={bookCover} />
      <Card.Body>
        <Card.Title>{bookData.title}</Card.Title>
        <Card.Text>
          {/* {bookData.description}
          Some quick example text to build on the card title and make up the
          bulk of the */}
        </Card.Text>
        <DeleteButton book_ID={bookData.id} list_ID={listId}></DeleteButton>
        {/*  <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default CardDeleteButton;
