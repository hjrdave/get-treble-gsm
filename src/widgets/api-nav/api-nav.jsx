/*
  Documentation Navigation
  Notes: 
*/

import React from 'react';
import APINavItems from '../../components/organisms/api-nav-items';
import { useTreble } from 'treble-gsm';

export default function APINav() {

  const [{ apiNavPostData }] = useTreble();

  React.useEffect(() => {
    console.log(apiNavPostData);
  }, [apiNavPostData]);

  return (
    <>
      <APINavItems
        navItems={[
          {
            section: 'Introduction',
            menuItems: [
              {
                text: 'What is TrebleGSM?',
                path: './api/introduction/what-is-treblegsm'
              },
              {
                text: 'Core Concepts',
                path: './api/introduction/core-concepts'
              },
              {
                text: 'Getting Started',
                path: './api/introduction/getting-started'
              },
              {
                text: 'Managing State',
                path: './api/introduction/managing-state'
              },
              {
                text: 'Class Support',
                path: './api/introduction/class-support'
              }
            ]
          },
          {
            section: 'Advanced Features',
            menuItems: [
              {
                text: 'Extending Stores',
                path: './api/advanced-features/extending-stores'
              },
              {
                text: 'Scoping Stores',
                path: './api/advanced-features/scoping-stores'
              },
              {
                text: 'Persisting State',
                path: './api/advanced-features/persisting-state'
              },
              {
                text: 'Managing Lists',
                path: './api/advanced-features/managing-lists'
              }
            ]
          },
          {
            section: 'Middleware',
            menuItems: [
              {
                text: 'What is Middleware?',
                path: './api/middleware/what-is-middleware'
              },
              {
                text: 'Payload Listeners',
                path: './api/middleware/payload-listeners'
              },
              {
                text: 'Log',
                path: './api/middleware/log'
              },
              {
                text: 'Run',
                path: './api/middleware/run'
              },
              ,
              {
                text: 'Check',
                path: './api/middleware/check'
              },
              {
                text: 'Process',
                path: './api/middleware/process'
              },
              {
                text: 'Callback',
                path: './api/middleware/callback'
              }
            ]
          },
          {
            section: 'Modules',
            menuItems: [
              {
                text: 'What are Modules?',
                path: './api/modules/what-are-modules'
              },
              {
                text: 'Installing Modules',
                path: './api/modules/installing-modules'
              },
              {
                text: 'Create a Module',
                path: './api/modules/'
              },
              {
                text: 'Troubleshooting',
                path: './api/modules/'
              }
            ]
          },
          {
            section: 'Typescript',
            menuItems: [
              {
                text: 'What is TrebleGSM?',
                path: './api/typescript/'
              },
            ]
          },
          {
            section: 'API References',
            menuItems: [
              {
                text: 'Treble Provider',
                path: './api/references/'
              },
              {
                text: 'useTreble',
                path: './api/references/'
              },
              {
                text: 'useScopedTreble',
                path: './api/references/'
              },
              {
                text: 'getTreble',
                path: './api/references/'
              },
              {
                text: 'withTreble',
                path: './api/references/'
              },
              {
                text: 'createStore',
                path: './api/references/'
              },
              {
                text: 'createModule',
                path: './api/references/'
              },
              {
                text: 'reducerActionKeys',
                path: './api/references/'
              },
            ]
          },
          {
            section: 'Module References',
            menuItems: [
              {
                text: 'treble-list-manager',
                path: './api/module-references/'
              },
              {
                text: 'treble-persist',
                path: './api/module-references/'
              },
              {
                text: 'treble-fetch',
                path: './api/module-references/'
              }
            ]
          }
        ]}
      />
    </>
  )
}


