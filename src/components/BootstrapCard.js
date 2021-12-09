import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

export const BootstrapCard = ({ bookData }) => {
  const imgsrc = `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{bookData.title}</Card.Title>
        <Card.Text>{bookData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Rating</ListGroupItem>
        <ListGroupItem>Category</ListGroupItem>
        <ListGroupItem>Author</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Rate book</Card.Link>
        <Card.Link href="#">Add to reading list</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BootstrapCard;
