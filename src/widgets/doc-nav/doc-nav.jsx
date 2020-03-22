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
                path: '/docs/getting-started',
                text: 'Getting Started',
                section: true
            },
            {
                path: '/docs/setup-treble',
                text: 'Setup Treble'
            },
            {
                path: '/docs/subscribe-and-update',
                text: 'Subscribe and Update'
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
                path: '/docs/support',
                text: 'Support',
                section: true
            },

        ]}
      />
    </>
  )
}


