import React from "react";
import { withTreble } from 'treble-gsm';
import { Store } from './Store';
import { Dropdown } from "react-bootstrap";
import CustomToggle from './custom-toggle';
import SearchResults from './search-results';
import { useSearchAPIStore } from './Store';
import './styles.scss';

function APISearchComp() {

  const [{ searchQuery }] = useSearchAPIStore();
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery);
        const posts = refs.map(({ ref }) => lunr.en.store[ref])
        setResults(posts)
      })
    }
  }, [searchQuery]);

  React.useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
        <Dropdown.Menu className={'dropdown-custom-menu'}>
          <SearchResults results={results} />
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

const APISearch = withTreble(APISearchComp, { store: Store });
export default APISearch;
