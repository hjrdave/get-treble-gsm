import React, { useState, useEffect } from "react";
import SEO from '../../components/seo';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import SearchForm from './search-form';
import SearchResults from './search-results';

export default function Page({ location }) {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get("keywords") || ""

  useEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])
        setResults(posts)
      })
    }
  }, [location.search])

  return (
    <>
      <SEO title="Search" />
      <PageContainer id={"search-page"} activePath={location}>
        <PageContent>
          <h1>Search Site</h1>
          <SearchForm query={searchQuery} />
          <SearchResults query={searchQuery} results={results} />
        </PageContent>
      </PageContainer>
    </>
  )
}
