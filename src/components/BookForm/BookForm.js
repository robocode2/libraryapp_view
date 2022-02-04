import React from "react";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axiosClient from "../../axios";

const BookForm = ({ submit }) => {
  const [values, setValues] = useState({
    title: "",
    isbn: "",
    description: "",
  });

  //const { currentUser, pending, logout } = useContext(AuthContext);

  async function postToAPI() {
    //const token = currentUser && (await currentUser.getIdToken());

    axiosClient
      .post("/books/create", {
        title: values.title,
        isbn: values.isbn,
        description: values.description,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  const [submitted, setSubmitted] = useState(false);

  const handleTitleInputChange = (event) => {
    const { title, value } = event.target;
    setValues((values) => ({
      ...values,
      title: value,
    }));
  };

  const handleISBNInputChange = (event) => {
    const { isbn, value } = event.target;
    setValues((values) => ({
      ...values,
      isbn: value,
    }));
  };

  const handleDescriptionInputChange = (event) => {
    const { description, value } = event.target;
    setValues((values) => ({
      ...values,
      description: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    //submit();
    postToAPI();
  };

  return (
    <div className="BookForm">
      <h3>Add book</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>title</Form.Label>
          <Form.Control
            type="title"
            data-testid="titleID"
            placeholder="Enter title"
            value={values.title}
            onChange={handleTitleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="isbn">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="isbn"
            placeholder="Enter isbn"
            value={values.isbn}
            onChange={handleISBNInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Text className="text-muted">Describe book</Form.Text>
          <Form.Control
            type="description"
            placeholder="description"
            value={values.description}
            onChange={handleDescriptionInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
