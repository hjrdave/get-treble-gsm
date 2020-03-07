---
path: "/docs/getting-started"
date: "2020-03-06"
title: "Getting Started"
---
# Getting Started

### Why Global State?

Managing state in React can get complicated and hard to maintain.  React.js has one way data flow and component state cannot be shared with other components without prop drilling. Prop drilling can cause unnessary re-renders and affect app performance greatly.  

Global state is a method of centralizing state in your app.  A data store is used to house state that will be shared amongst all of the components that subscribe to it.  The store becomes the apps source of truth. By using this method of managing state, prop drilling is no longer necessary as each component has access to the store.  When a certain state updates in the store only the components that use the state will re-render.  This provides consistent and predictable rendering in your app.  In turn this makes state more maintainable and greatly improves performance in the application.

### About Treble?

Treble is a global state management library inspired by a [blog post](https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c) by [Luke Hall](https://medium.com/@luke.hall). Treble utilizes React's context and hook's API to provide powerful state management for React apps. There are many global state management librarys in the wild right now.  Most do not utilize React's new features and the learning curve is great. Treble's goal is to provide a simple way to manage global state in your React app by providing an easy setup, little boilerplate, and a straight forward API. All of this so the developer can manage state with confidence.