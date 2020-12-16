import React from "react";
import { navigate } from "gatsby";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import './_search-form.scss';

function SearchResults({ query }) {

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <>
      <Form role="search" className='search-form'>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="search-input"
            name="keywords"
            placeholder="Type Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={e =>
              navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
            }
            value={query}
            autoFocus={true}
            onKeyPress={(event) => { handleOnKeyPress(event) }}
          />
        </InputGroup>
      </Form>
    </>
  )
}

export default SearchResults
