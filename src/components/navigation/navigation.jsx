import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby";
import Image from '../../images/register';
import uniqid from 'uniqid';
import './_navigation.scss';
// import Search from '../searchContainer.js'

function Navigation({ navItems }) {

  return (
    <>
      <Navbar className='navigation'>
        <Nav className="mr-auto">
          {
            navItems?.map((item) => {
              return (
                <React.Fragment key={uniqid()}>
                  <Link to={item.path} className='nav-link'>{item.text}</Link>
                </React.Fragment>
              )
            })
          }
          
          <a href='https://github.com/hjrdave/treble-gsm' target='_blank' className='nav-link'><i class="fab fa-github"></i></a>
          <a href='https://mediafish.io' className='nav-link' target='_blank'><Image name={'logoMediafishIconOnly'}/></a>
          
          {/* <Search /> */}
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation;