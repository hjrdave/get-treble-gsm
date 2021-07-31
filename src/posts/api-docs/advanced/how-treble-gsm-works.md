---
path: "/api/advanced/how-treble-gsm-works"
date: "2021-01-01"
title: "How TrebleGSM Works"
subMenu: 
    - text: ''
      path: '#'
---

In order to successfully create a TrebleGSM Module it is necessary to understand some fundamental mechanics on how TrebleGSM works. See the infographic below.
<div class='crsInfoGraphic'>
</div>
<!--crsInfoGraphic-->
<!-- ![CRS Infographic](./crs-infographic.png) -->

####Components
This is the most well known part of the TrebleGSM lifecycle. Components recieve state from the Store and dispatch payloads to the Reducer.

####Dispatchers
These are TrebleGSM methods that components use to send a payload to the Reducer. A payload is an object of data which includes the State to be updated and other data the Reducer needs to process that state. A dispatcher method islik e a mail truck that picks up mail from a mail box and takes it to the Post Office to be processed for delivery.

####Reducer
The Reducer recieves a payload from a dispatcher method and uses its properties as instructions on how to process the recieved state. The Reducer will find the correct state in the Store and update that state. It can also pass the state on to Middleware for futher processing. Think of the Reducer as the Post Office that seperates and organizes mail and gets it ready to be delivered to the correct address.

####Middleware
This is an optional pipeline that allows for further processing of state and logic to fire before state reaches the Store to be stored. Middleware is a very powerful feature and has access to all dispatchers and a plethoria of Store data.

####Store
The Store is like a database for state. It holds state and uses actions (keys) to allow the Reducer to find the requested state and update it with the new one.

####Provider
The provider gives components access to Store state and Dispatcher methods. Any components that are nested within the Provider component or passed to the Provider higher-order function will get access to these. This also allows components that are outside of the provider to not have access to that Store.