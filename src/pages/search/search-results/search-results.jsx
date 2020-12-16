import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "gatsby";
import uniqid from "uniqid";
import './_search-results.scss';

function SearchResults({ results, query }) {
  //handlers
  const truncate = input => {
    return input.length > 5 ? `${input.substring(0, 255)}...` : input
  }
  const searchResults = results || [];
  return (
    <>
      <section aria-label="Search results for all posts">
        {!!searchResults.length && query && (
          <h3 aria-live="assertive">
            Found {results.length} posts on "{query}"
          </h3>
        )}
        {!!searchResults.length && (
          <>
            {searchResults.map(({ title, content, date, path }) => (
              <React.Fragment key={uniqid()}>
                <Card className="mt-3 search-results-card">
                  <Link to={path}>
                    <Card.Body>
                      <Card.Subtitle className="mb-2 text-muted">
                        {date}
                      </Card.Subtitle>
                      <Card.Title>
                        {title}
                      </Card.Title>
                      <Card.Text>{content && truncate(content)}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </React.Fragment>
            ))}
          </>
        )}
      </section>
    </>
  )
}

export default SearchResults
