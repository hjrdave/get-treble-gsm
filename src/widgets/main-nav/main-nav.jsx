/*
  Main Navigation
  Notes: Each object is a navigation item.  Path is the link and text is the menu item name.
*/

import React from 'react';
import Navigation from '../../components/organisms/navigation';

function MainNav() {

  return (
    <>
      <Navigation
        navItems={[
          {
            path: '/api/introduction/what-is-treblegsm',
            text: 'API'
          },
          // {
          //   path: '/',
          //   text: 'Tutorials'
          // }
        ]}
      />
    </>
  )
}

export default MainNav;
