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
                path: './api/what-is-treblegsm'
              },
              {
                text: 'Core Concepts',
                path: './'
              },
              {
                text: 'Getting Started',
                path: './'
              },
              {
                text: 'Managing State',
                path: './'
              },
              {
                text: 'Class Support',
                path: './'
              }
            ]
          },
          {
            section: 'Advanced Features',
            menuItems: [
              {
                text: 'Extending Stores',
                path: './'
              },
              {
                text: 'Scoping Stores',
                path: './'
              },
              {
                text: 'Persisting State',
                path: './'
              },
              {
                text: 'Managing Lists',
                path: './'
              }
            ]
          },
          {
            section: 'Middleware',
            menuItems: [
              {
                text: 'What is Middleware?',
                path: './'
              },
              {
                text: 'Payload Listeners',
                path: './'
              },
              {
                text: 'Log',
                path: './'
              },
              {
                text: 'Run',
                path: './'
              },
              ,
              {
                text: 'Check',
                path: './'
              },
              {
                text: 'Process',
                path: './'
              },
              {
                text: 'Callback',
                path: './'
              }
            ]
          },
          {
            section: 'Modules',
            menuItems: [
              {
                text: 'What are Modules?',
                path: './'
              },
              {
                text: 'Installing Modules',
                path: './'
              },
              {
                text: 'Create a Module',
                path: './'
              },
              {
                text: 'Troubleshooting',
                path: './'
              }
            ]
          },
          {
            section: 'Typescript',
            menuItems: [
              {
                text: 'What is TrebleGSM?',
                path: './'
              },
            ]
          },
          {
            section: 'API References',
            menuItems: [
              {
                text: 'Treble Provider',
                path: './'
              },
              {
                text: 'useTreble',
                path: './'
              },
              {
                text: 'useScopedTreble',
                path: './'
              },
              {
                text: 'getTreble',
                path: './'
              },
              {
                text: 'withTreble',
                path: './'
              },
              {
                text: 'createStore',
                path: './'
              },
              {
                text: 'createModule',
                path: './'
              },
              {
                text: 'reducerActionKeys',
                path: './'
              },
            ]
          },
          {
            section: 'Module References',
            menuItems: [
              {
                text: 'treble-list-manager',
                path: './'
              },
              {
                text: 'treble-persist',
                path: './'
              },
              {
                text: 'treble-fetch',
                path: './'
              },
            ]
          }
        ]}
      />
    </>
  )
}


