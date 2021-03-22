---
path: "/api/middleware/middleware-data-object"
date: "2021-01-01"
title: "Middleware Data Object"
subMenu: 
    - text: ''
      path: '#'
---

Middleware functions are only as powerful as the data they have access to. Fortunately TrebleGSM allows Middleware functions to access a plethora of Store data to be used by their logic.

TrebleGSM passes the MiddlewareData object to all Middleware functions with the exception of the payloadListener. From this object you have access to many dispatch and state data. References below.

#### dispatchValue
Stores the current dispatched value. This value can change as it goes down the middleware pipeline. It is best practice to not change the dispatchValue type.

#### dispatchPayload
Stores the raw dispatch payload data that is returned from a dispatcher method. This is the only property that can be accessed by payloadListeners.

#### initialDispatchValue
This property is the initial dispatched value. Even if the dispatchValue changes Middleware will always have access to the original value before processing.

#### Action
The state action for the dispatched state.

#### Features
Gives middleware access to all features set in the dispatched state’s Store item. This is handy if there are feature flags set that middleware might need to be aware of.

#### currentState
The current state value of the Store item.

#### initialState
The initial state value of a Store item. This can be used to reset state to its initial value.

#### storeItems
Returns an array of current Store items.

#### storeState
Returns an array of current Store State.


#### storeModules
Returns an array of Store modules.

#### Dispatchers
Allows middleware functions to access all Store dispatchers. This allows a middleware function to literally update Store state.
