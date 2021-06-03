/*
  Documentation Navigation
  Notes: 
*/

import React from 'react';
import APINavItems from '../../components/organisms/api-nav-items';
import { useTreble } from 'treble-gsm';

export default function APINav() {

  return (
    <>
      <APINavItems
        navItems={[
          {
            section: 'Introduction',
            menuItems: [
              {
                text: 'What is TrebleGSM?',
                path: '/api/introduction/what-is-treblegsm'
              },
              {
                text: 'Getting Started',
                path: '/api/introduction/getting-started'
              },
              {
                text: 'Managing State',
                path: '/api/introduction/managing-state'
              }
            ]
          },
          {
            section: 'Advanced',
            menuItems: [
              {
                text: 'How TrebleGSM Works',
                path: '/api/advanced/how-treble-gsm-works'
              },
              {
                text: 'Core Concepts',
                path: '/api/advanced/core-concepts'
              },
              {
                text: 'Extending Stores',
                path: '/api/advanced/extending-stores'
              },
              {
                text: 'Scoping Stores',
                path: '/api/advanced/scoping-stores'
              },
              {
                text: 'Persisting State',
                path: '/api/advanced/persisting-state'
              },
              {
                text: 'Managing Lists',
                path: '/api/advanced/managing-lists'
              },
              {
                text: 'Class Support',
                path: '/api/advanced/class-support'
              }
            ]
          },
          {
            section: 'Middleware',
            menuItems: [
              {
                text: 'What is Middleware?',
                path: '/api/middleware/what-is-middleware'
              },
              {
                text: 'Middleware Data Object',
                path: '/api/middleware/middleware-data-object'
              }
            ]
          },
          {
            section: 'Modules',
            menuItems: [
              {
                text: 'What are Modules?',
                path: '/api/modules/what-are-modules'
              },
              {
                text: 'Create a Module',
                path: '/api/modules/create-a-module'
              },
              {
                text: 'API Reference',
                path: '/api/modules/api-reference'
              },

            ]
          },

          {
            section: 'API References',
            menuItems: [
              {
                text: 'TrebleGSM',
                path: '/api/references/treble-gsm'
              },
              {
                text: 'Treble Core',
                path: '/api/references/treble-core'
              },
              {
                text: 'Treble Persist',
                path: '/api/references/treble-persist'
              },
              {
                text: 'Treble List Manager',
                path: '/api/references/treble-list-manager'
              }
            ]
          }
        ]}
      />
    </>
  )
}


