import React from "react";
import ListsContainer from "./ListsContainer";
import ListForm from "../createListForm/ListForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app from "../../firebase";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <button onClick={() => app.auth().signOut()}>Sign out</button>

          <ListForm></ListForm>
        </Col>
        <Col xs={6}>
          <ListsContainer></ListsContainer>
        </Col>
        <Col xs={3}>
          <Link to="/browse">Browse library</Link>
        </Col>
      </Row>
    </Container>
  );
};
export default UserPage;
