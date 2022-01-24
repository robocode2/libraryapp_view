import React from "react";
import ListsContainer from "./ListsContainer";
import ListForm from "../createListForm/ListForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app from "../../firebase";
import ListContainerwithDropdown from "./ListContainerwithDropdown";

const UserPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          My Profile
          <button onClick={() => app.auth().signOut()}>Sign out</button>
          {/*  <ListsContainer></ListsContainer> */}
          <ListForm></ListForm>
        </Col>
        <Col xs={10}>
          <ListContainerwithDropdown></ListContainerwithDropdown>
        </Col>
        {/* <Col xs={2}></Col> */}
      </Row>
    </Container>
  );
};
export default UserPage;
