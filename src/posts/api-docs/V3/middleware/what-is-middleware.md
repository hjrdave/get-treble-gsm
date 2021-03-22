---
path: "/api/middleware/what-is-middleware"
date: "2021-01-01"
title: "What is Middleware"
subMenu: 
    - text: ''
      path: '#'
---

Middleware provides a way to centralize state logic and automate tasks when updating state in the Store. Middleware functions will fire before state reaches the Store and automatically has access to Store data, dispatched state data, and subscribe methods. Middleware can be used for calling API’s, logging, transforming state, comparing dispatched state against conditions, and even updating other state items! This is a very powerful feature that allows for a lot of possibilities.

### Setup
Middleware functions are Store Item specific. Meaning they only affect the state they have been specified for. They can be set to a state by using the features property in a Store Item. Example below:

### Middleware Types
TrebleGSM has 4 types of middleware: log, check, process, and callback. Each of these middleware types have a specific purpose and firing order. 

### Firing Order
All middleware types are independent of each other. Despite this they do have a firing order that is important to take advantage of as you use them in development. As soon as state is dispatched the middleware pipeline is started.  Log is an asynchronous side effect and runs immediately.  Check runs immediately after state is dispatched. Process runs after Check resolves to true. Callback is a side effect that runs after Process resolves. As soon as all middleware functions resolve (except log), then the state will update the Store.

### Disabling Middleware
If there is a circumstance where you do not want the middleware pipeline to run when updating the Store you can easily disable it from a dispatch call (this will only disable middleware for the targeted state and only for the specified dispatch). Example below: 

### Other Middleware Types
TrebleGSM has a couple special middleware types that work apart from the middleware pipeline. These are run and payloadListener. Run is an asynchronous side effect similar to log but only runs when it is called by the Store method Store.run. It is a way to centralize Store logic without having to update state. PayloadListener is an asynchronous side effect that can be used to examine the payload sent to the Store. This middleware is often used by modules to examine dispatch payload data. These middleware types cannot be disabled by dispatch methods. 
