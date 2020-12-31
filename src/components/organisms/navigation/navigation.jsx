import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "gatsby";
import Image from '../../../images/register';
import uniqid from 'uniqid';
import navigation from './navigation.module.scss';

function Navigation({ navItems }) {

  return (
    <>
      <Navbar className={navigation.navigation}>
        <Nav className={`${navigation.navbarNav} mr-auto`}>
          {
            navItems?.map((item) => {
              return (
                <React.Fragment key={uniqid()}>
                  <Link to={item.path} className='nav-link'>{item.text}</Link>
                </React.Fragment>
              )
            })
          }

          <a href='https://github.com/hjrdave/treble-gsm' target='_blank' className='nav-link'><i className="fab fa-github"></i></a>
          <a href='https://mediafish.io' className='nav-link' target='_blank'><Image name={'logoMediafishIconOnly'} className={navigation.gatsbyImageWrapper} /></a>

          {/* <Search /> */}
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation;