import React from "react";
import Card from "react-bootstrap/Card";
import AddtoListButton from "../CustomButtons/AddtoList";

export const AddBookCard = ({ bookData }) => {
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
        <AddtoListButton book_ID={bookData.id}></AddtoListButton>
      </Card.Body>
    </Card>
  );
};

export default AddBookCard;
