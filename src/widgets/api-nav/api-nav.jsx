/*
  Documentation Navigation
  Notes: 
*/

import React from 'react';
import APINavItems from '../../components/api-nav-items';

export default function APINav() {

  return (
    <>
      <APINavItems
        navItems={[
          {
            section: 'Introduction',
            menuItems: [
              {
                text: 'Why Global State?',
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
            ]
          },
          {
            section: 'Middleware',
            menuItems: [
              {
                text: 'Introduction',
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
                text: 'Introduction',
                path: './'
              },
              {
                text: 'Create a Module',
                path: './'
              }
            ]
          },
          {
            section: 'Features',
            menuItems: [
              {
                text: 'Scaling Stores',
                path: './'
              },
              {
                text: 'Scoped Stores',
                path: './'
              },
              {
                text: 'Persisting State',
                path: './'
              },
              {
                text: 'List Management',
                path: './'
              }
            ]
          },
          {
            section: 'API References',
            menuItems: [
              {
                text: 'Dispatchers',
                path: './'
              },
              {
                text: 'Utilities',
                path: './'
              },
              {
                text: 'Store Features',
                path: './'
              },
            ]
          }
        ]}
      />
    </>
  )
}


