import React from "react";
import BooksListBrowse from "./BooksListBrowse.js";
import SearchForm from "../SearchForm/SearchForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListForm from "../createListForm/ListForm.js";
import BookForm from "../createBookForm/BookForm";
import DropdownList from "../AddButton/DropdownList.js";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          This is gutterThis is gutterThis is gutterThis is gutterThis is
          gutterThis is gutterThis is gutterThis is gutter6
        </Col>
        <Col xs={8}>
          <DropdownList></DropdownList>
          <BookForm></BookForm>

          <ListForm></ListForm>
          <BooksListBrowse></BooksListBrowse>
        </Col>
        <Col xs={2}>
          This is gutterThis is gutterThis is gutterThis is gutterThis is
          gutterThis is gutterThis is gutterThis is gutter
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
