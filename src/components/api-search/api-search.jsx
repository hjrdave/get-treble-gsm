import React from "react";
import { navigate } from "gatsby";
import { Dropdown } from "react-bootstrap";
import CustomToggle from './custom-toggle';
import './styles.scss';

function APISearch() {



  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default APISearch
