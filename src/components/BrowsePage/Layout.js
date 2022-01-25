import React from "react";
import BooksListBrowse from "./BooksListBrowse.js";
import SearchForm from "../SearchForm/SearchForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import app from "../../firebase";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <button onClick={() => app.auth().signOut()}>Sign out</button>
        </Col>
        <Col xs={8}>
          <BooksListBrowse></BooksListBrowse>
        </Col>
        <Col xs={2}>
          <Link to="/profile">My Profile</Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
