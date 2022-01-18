import React from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="search">
      <div className="searchBar">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Search by title, author, isbn.."
            value={searchTerm}
            onChange={handleChange}
            id="search"
          />

          <Button variant="secondary">Search</Button>
          <div className="vr" />
        </Stack>
      </div>
      <div className="searchOptions">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Title</Button>
          <Button variant="secondary">Author</Button>
          <Button variant="secondary">ISBN</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SearchBar;
