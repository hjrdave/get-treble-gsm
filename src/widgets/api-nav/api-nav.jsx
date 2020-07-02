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
              text: 'Getting Started',
              section: true
            },
            {
              path: '/api/introduction',
              text: 'Introduction'
            },
            {
                path: '/api/setup',
                text: 'Setup'
            },
            {
              path: '/api/manage-state',
              text: 'Manage State'
            },
            {
                text: 'Advanced',
                section: true
            },
            // {
            //     path: '/api/history',
            //     text: 'History'
            // },
            {
              path: '/api/managing-lists',
              text: 'Managing Lists'
            },
            {
              path: '/api/middleware',
              text: 'Middleware'
            },
            {
                path: '/api/scoped-global-state',
                text: 'Scoped Global State'
            },
            {
                path: '/api/state-persistence',
                text: 'State Persistence'
            },
            {
              path: '/api/toggle-state',
              text: 'Toggle State'
            },
            {
              path: '/api/class-components',
              text: 'Class Components'
            },
            // {
            //   path: '/api/extending-the-store',
            //   text: 'Extending the Store'
            // },
            {
              text: 'API Index',
              section: true
            },
            {
              path: '/api/index/subscribe-api',
              text: 'SubscribeAPI'
            },
            {
              path: '/api/changelog',
              text: 'Changelog',
              section: true
            },
            {
                path: '/api/support',
                text: 'Support',
                section: true
            }
        ]}
      />
    </>
  )
}


