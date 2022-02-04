import React from "react";
import BooksListBrowse from "../components/LibraryPage/BooksListBrowse.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import app from "../firebase";
import BookForm from "../components/BookForm/BookForm";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <BookForm></BookForm>
        </Col>
        <Col xs={8}>
          <BooksListBrowse></BooksListBrowse>
        </Col>
        <Col xs={2}>
          <Link to="/profile">My Profile</Link>
          <button onClick={() => app.auth().signOut()}>Sign out</button>
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
