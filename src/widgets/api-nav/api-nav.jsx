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
            section: 'Extend Treble',
            menuItems: [
              {
                text: 'Introduction to Modules',
                path: './'
              },
              {
                text: 'Create a Module',
                path: './'
              },
              {
                text: 'Store Features',
                path: './'
              },
            ]
          },
          {
            section: 'API Reference',
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


