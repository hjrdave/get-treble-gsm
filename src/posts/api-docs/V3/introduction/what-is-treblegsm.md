---
path: "/api/introduction/what-is-treblegsm"
date: "2021-01-01"
title: "What is TrebleGSM"
subMenu: 
    - text: ''
      path: '#'
---

### What is Global State?

As React apps scale, managing state can become complicated and hard to maintain. Even though React.js manages local state well, when state needs to be shared amongst components, methods like prop-drilling and lifting up state must be used.  Prop-drilling causes huge performance issues as every component the prop passes (drills) through is re-rendered when state changes, and lifting up state to a parent component causes the component to contain state that is not relevant to that component, which makes it harder to manage state.

Global state is a method of centralizing application state.  A data store is used to house state that will be shared amongst components that subscribe to it. By using this method to manage state, prop-drilling and lifting up state is no longer necessary as each component has access to the store.  When a certain state in the store updates, only the components that subscribe to that state will re-render. This makes state management more maintainable and greatly improves application performance.


### Why TrebleGSM?

There are many global state management (GSM) libraries in the wild. Each have a different flavor and take on how GSM should work. TrebleGSM has a philosophy that GSMs should be easy to setup, simple to use, and scalable to meet complex application requirements. This is why I created TrebleGSM as I wanted something that had a low bar to entry and that could grow with the host application. 

TrebleGSM has a light footprint, is highly extendable, can be used in simple applications, in enterprise level applications, it is easily integrated into applications with other GSM solutions, and can be used to build widgets in stand alone libraries.

All of this so you can manage state with confidence!
