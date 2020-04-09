/*
  Documentation Navigation
  Notes: 
*/

import React from 'react';
import {default as APINav} from '../../components/doc-nav';

export default function DocNav() {

  return (
    <>
      <APINav
        navItems={[
            {
              text: 'Getting Started',
              section: true
            },
            {
              path: '/docs/about-treble',
              text: 'About Treble'
            },
            {
                path: '/docs/setup',
                text: 'Setup'
            },
            {
              path: '/docs/manage-state',
              text: 'Manage State'
            },
            {
                text: 'Advanced',
                section: true
            },
            {
                path: '/docs/history',
                text: 'History'
            },
            {
                path: '/docs/scoped-global-state',
                text: 'Scoped Global State'
            },
            {
                path: '/docs/state-persistence',
                text: 'State Persistence'
            },
            {
              path: '/docs/toggle-state',
              text: 'Toggle State'
            },
            {
              path: '/docs/middleware',
              text: 'Middleware'
            },
            {
              path: '/docs/class-components',
              text: 'Class Components'
            },
            {
                path: '/docs/support',
                text: 'Support',
                section: true
            },

        ]}
      />
    </>
  )
}


