/*
  Main Navigation
  Notes: Each object is a navigation item.  Path is the link and text is the menu item name.
*/

import React from 'react';
import Navigation from '../../components/navigation';

function MainNav() {

  return (
    <>
      <Navigation
        navItems={[
          {
            path: '/api/introduction',
            text: 'API'
          }
        ]}
      />
    </>
  )
}

export default MainNav;
