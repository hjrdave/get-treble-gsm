import React from "react"
import Card from 'react-bootstrap/Card';
import { Link } from 'gatsby';
import uniqid from 'uniqid';


function SearchResults({ results, query }) {

  //handlers
  const truncate = (input) => {
    return input.length > 5 ? `${input.substring(0, 255)}...` : input;
  };

  return (
    <>
      <section aria-label="Search results for all posts">
        {!!results.length && query &&
          <h3 aria-live="assertive">Found {results.length} posts on "{query}"</h3>
        }
        {!!results.length &&
          <>
            {results.map(({ title, content, date, path }) => (
              <React.Fragment key={uniqid()}>
                <Card className='mt-3'>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    <Card.Title><Link to={path}>{title}</Link></Card.Title>
                    <Card.Text>
                      {content && truncate(content)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            ))}
          </>
        }
      </section>
    </>
  )
};

export default SearchResults;