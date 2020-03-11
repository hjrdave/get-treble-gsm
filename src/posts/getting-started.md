---
path: "/docs/getting-started"
date: "2020-03-06"
title: "Getting Started"
---
# Getting Started

As React apps scale, managing state can become complicated and hard to maintain. Even though React.js manages local state well, when state needs to be shared amongst components, methods like prop-drilling must be used.  Prop-drilling causes huge performance issues as every component the prop (drills) passes through is re-rendered when state changes.

Global state is a method of centralizing state in an app.  A data store is used to house state that will be shared amongst the components that subscribe to it. By using this method to manage state, prop-drilling is no longer necessary as each component has access to the store.  When a certain state in the store updates only the components that use that state will re-render. This makes state management more maintainable and greatly improves application performance.


### Why Treble?

Treble is a global state management library inspired by a [blog post](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c) by [Luke Hall](https://medium.com/@luke.hall). Treble utilizes React's Context and Hook's API to provide powerful state management to React apps. Treble's goal is to provide a simple way to manage global state in your React app by providing an easy setup, little boilerplate, and a straight forward API. All of this so the developer can manage state with confidence!
