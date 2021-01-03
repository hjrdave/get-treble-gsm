---
path: "/api/deprecated"
date: "2020-15-5"
title: "Deprecated API"
subMenu: 
  - text: 'dispatch'
    path: '#dispatch'
  - text: 'updateStore'
    path: '#update-store'
---
## V1.3.0 and down

#### dispatch
`dispatch` is destructured from the `useTreble` hook and passed to `updateStore` to subscribe to the `Store`. It has been deprecated in favor of the SubscribeAPI `Store` object.
```javascript
[{ }, dispatch] = useTreble();
```

#### updateStore
`updateStore` is used to subscribe to the `Store` and manage state. It has been deprecated in favor of the SubscribeAPI `Store` object.
```javascript
updateStore(action, dispatchValue, dispatch);  
```
 
##### updateStore options
`updateStore` takes an optional options parameter that allows different options to be set on the call.
```javascript
updateStore(action, dispatchValue, dispatch, {/*option parameters*/})
```
**enableMiddleware** - when set to `false` will bypass middleware pipeline.  
**remove** - when set to `true` will take the dispatchValue and try to match it with an item in the state array and then removes it.  
**append** - appends a dispatchValue to the beginning of a state array.  
**prepend** - when set to `true` appends the dispatchValue to the end of a list.  
**orderBy** - orders a state array based on the dispatchValue which is a string of the target property to be sorted. Set to `asc` or `desc`.  
**toggle** - when set to `true` takes the current boolean dispatchValue and toggles back and forth.







