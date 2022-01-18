import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchForm = () => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalSearch">
        <Form.Label column sm={2}>
          Title, author, ISBN..
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="searchParameter"
            placeholder="Title, author, ISBN.."
          />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Title"
              name="formHorizontalRadios"
              id="formHorizontalRadios1author"
            />
            <Form.Check
              type="radio"
              label="Author"
              name="formHorizontalRadios"
              id="formHorizontalRadios2title"
            />
            <Form.Check
              type="radio"
              label="ISBN"
              name="formHorizontalRadios"
              id="formHorizontalRadios3ISBN"
            />
          </Col>
        </Form.Group>
      </fieldset>
      {/*   <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>
 */}
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Search</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
