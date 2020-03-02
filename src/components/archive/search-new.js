import React, { useState, useEffect } from "react"
import * as JsSearch from "js-search"

function Search() {

  //state
  const
    [isLoading, setIsLoading] = useState(true),
    [searchResults, setSearchResults] = useState([]),
    [search, setSearch] = useState(null),
    [isError, setIsError] = useState(false),
    [indexByTitle, isIndexByTitle] = useState(false),
    [indexByAuthor, setIndexByAuthor] = useState(false),
    [termFrequency, setTermFrequency] = useState(true),
    [removeStopWords, setRemoveStopWords] = useState(false),
    [searchQuery, setSearchQuery] = useState(""),
    [selectedStrategy, setSelectedStrategy] = useState(""),
    [selectedSanitizer, setSelectedSanitizer] = useState(""),
    [prevState, setPrevState] = useState(null);


  //handlers
  const handleData = (nextProps, prevState) => {
    if (prevState.search === null) {
      const { engine } = nextProps
      return {
        indexByTitle: engine.TitleIndex,
        indexByAuthor: engine.AuthorIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      }
    }
    return null
  }



  useEffect(() => {
    handleData(prevState);
  }, []);

  return (
    <>
    </>
  )
}

export default Search;