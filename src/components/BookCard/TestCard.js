import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownList from "../AddButton/DropdownList";
export const TestCard = ({ bookData }) => {
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
        <DropdownList book_ID={bookData.id}></DropdownList>
        {/*  <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default TestCard;
