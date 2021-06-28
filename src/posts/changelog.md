---
path: "/api/changelog"
date: "2020-03-06"
title: "Changelog"
subMenu: 
  - text: 'v3.0.0'
    path: '#300'
  - text: 'v2.1.0'
    path: '#v210'
  - text: 'v2.0.0-beta.x'
    path: '#v200beta'
  - text: 'v1.3.0'
    path: '#v130'
  - text: 'v1.3.0-beta.x'
    path: '#v130beta'
  - text: 'v1.1.2'
    path: '#v112'
---

## v3.0.0
Release Notes:
- Added 3rd item to useTreble hook called Utilities. This object will have future helper properties.
  - Util.actions - Helper method to make it easier to access SubscribeAPI actions in typescript projects
- Breaking Changes. 
  - Data passed to middleware functions are no longer just dispatch values. Middleware data is now an object with store data properties.

## v2.1.0
Release Notes:
- Added three new SubscribeAPI methods. 
  - Store.edit
  - Store.getActions
  - Store.getStateKeys

## v2.0.0-beta
Major release with breaking changes.  
Release Notes:
- updateStore utility function deprecated and removed
- New SubscribeAPI finalized
- Methods Store.reset and Store.removeBatch added

## v1.3.0
Release Notes:
- Experimental SubscribeAPI
- updateStore deprecation warning

## v1.3.0-beta
Release Notes:
- List Management module
- Extending Store
- Small API changes
- Bug fixes

## v1.1.2
Release Notes: 
- Middleware support
- Class component support
- Toggle state



