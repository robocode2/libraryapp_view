import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuth } from "../../AuthContext";
import axiosClient from "../../axios";

const ListForm = ({ submit }) => {
  const { currentUser } = useAuth();
  //const token = currentUser.getIdToken();
  const [values, setValues] = useState({
    listName: "",
    description: "",
  });

  async function postToAPI() {
    /* const auth = firebase.auth();
    const user = auth.currentUser; */
    const token = currentUser && (await currentUser.getIdToken());
    console.log(token);
    axiosClient
      .post(
        "/lists/create",
        {
          name: values.listName,
          description: values.description,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  const [submitted, setSubmitted] = useState(false);

  const handleNameInputChange = (event) => {
    const { listName, value } = event.target;
    setValues((values) => ({
      ...values,
      listName: value,
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
    <div className="Listform">
      <h3>Create List</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="listName">
          <Form.Label>List name</Form.Label>
          <Form.Control
            type="listName"
            placeholder="Enter list name"
            data-testid="listnameid"
            value={values.listName}
            onChange={handleNameInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="listDescription">
          <Form.Label>Description</Form.Label>
          <Form.Text className="text-muted">Describe list</Form.Text>
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

export default ListForm;
