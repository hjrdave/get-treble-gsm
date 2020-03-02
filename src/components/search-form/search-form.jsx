import React from "react";
import { navigate } from 'gatsby';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function SearchResults({ query }) {

  return (
    <>
      <Form role='search' method='GET'>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="search-input"
            name="keywords"
            placeholder="Type Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={(e) => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
            value={query}
          />
        </InputGroup>
      </Form>
    </>
  )
}

export default SearchResults;