---
path: "/api/index/middleware-api"
date: "2020-02-07"
title: "Middleware API"
subMenu: 
  - text: 'call' 
    path: '#call'
  - text: 'check' 
    path: '#check'
  - text: 'process' 
    path: '#process'
  - text: 'Data Object Properties' 
    path: '#data-object-properties'
---

TrebleGSM middleware allows the Treble Store to centralize state related logic. It also allows TrebleGSM functionality to be extended with 3rd party middleware.

You can access the **Middleware** API from a Store Items `features` property.
```javascript
{
  action: 'updateSomeState',
  state: { someState: 'foo' },
  features: {
    //middleware properties
  }
}
```

####call
Fires as soon as state is dispatched. It is a non-blocking side effect.
```javascript
features: {
  call: (data) => void
}
```

####check
Fires as soon as state is dispatched. It returns a boolean value. If `true` the dispatch pipeline will continue. If `false` it will cancel and the Store will not be updated.
```javascript
features: {
  check: (data) => boolean
}
```

####process
Fires after the `check` middleware finishes. It takes a dispatch value and returns a new value. The new value will be updated to the Store.
```javascript
features: {
  process: (data) => any
}
```

####Data Object Properties
Each middleware function can recieve a data object with the dispatch value and other Store data properties.

**dispatchValue** - Value dispatched from **SubscribeAPI** methods.
```javascript
 dispatchValue: any
```
**dispatchAction** - Action data dispatched from **SubscribeAPI** methods.
```javascript
  dispatchAction: {
    dispatchTime: Date,
    type: string,
    [key: string]: any, //action dispatch method
    subscribeType: string,
    options?: //Store Method option properties
  }
```
**processedValue** - Processed dispatch value that is returned from `process` middleware.
```javascript
 processedValue: any | undefined,
```
**action** - Store item action key.
```javascript
 action: string
```
**features** - Store item features.
```javascript
 features: any | undefined
```
**currentState** - Store item current state.
```javascript
 currentState: any
```
**storeState** - All Store item state.
```javascript
 storeState: {
   [key:string]: any
   }
```
**storeItems** - Returns an array of Store Item objects.
```javascript
 storeItems: {
    action: string,
    state: any,
    features?: //Store item features
   }[]
```











 



