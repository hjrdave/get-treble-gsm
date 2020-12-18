import React from "react";
import { navigate } from 'gatsby';
import { Dropdown } from 'react-bootstrap';
import uniqid from "uniqid";

function SearchResults({ results }) {



  //handlers
  const truncate = input => {
    return input.length > 5 ? `${input.substring(0, 255)}...` : input
  }
  const searchResults = results || [];
  return (
    <>
      {!!searchResults.length && (
        <>
          {
            searchResults.map(({ title, content, date, path }, index) => (
              <React.Fragment key={uniqid()}>
                <Dropdown.Item eventKey={index} onClick={() => navigate(path)}>
                  {title}
                </Dropdown.Item>
              </React.Fragment>
            ))
          }
        </>
      )}
    </>
  )
}

export default SearchResults
