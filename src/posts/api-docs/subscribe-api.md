---
path: "/api/index/subscribe-api"
date: "2020-02-07"
title: "SubscribeAPI"
subMenu: 
  - text: 'Store.update' 
    path: '#storeupdate'
  - text: 'Store.remove'
    path: '#storeremove'
  # - text: 'Store.edit'
  #   path: '#storeedit'
  - text: 'Store.append'
    path: '#storeappend'
  - text: 'Store.prepend'
    path: '#storeprepend'
  - text: 'Store.orderBy'
    path: '#storeorderby'
  - text: 'Store.toggle'
    path: '#storetoggle'
  - text: 'Store.reset'
    path: '#storereset'
  - text: 'Store.removeBatch'
    path: '#storeremovebatch'
---

The TrebleGSM **SubscribeAPI** was introduced in V2 to access and manage state in the Store.

You can access the **SubscribeAPI** object with the useTreble hook.
```javascript
const [StoreItems, Store] = useTreble();
```

####Store.update
This method is used to update a state value in the Store with a new value.
```javascript
Store.update(action, dispatchValue, options?);
```

####Store.remove
Targets a value in a Store state array and removes it.
```javascript
Store.remove(action, targetValue);
```

####Store.append
Appends a state value to a Store state array.
```javascript
Store.append(action, dispatchValue, options?);
```

####Store.prepend
Prepends a state value to a Store state array.
```javascript
Store.prepend(action: string, dispatchValue, options?);
```

####Store.orderBy
Orders a target property in ascending or descending order.
```javascript
Store.orderBy(action, targetProperty, orderType: 'asc' | 'desc');
```

####Store.toggle
Takes the current boolean state of a Store state object and toggles boolean values back and forth.
```javascript
Store.toggle(action, currentState);
```

####Store.reset
Takes a state action and then resets the store value to its initial value.
```javascript
Store.reset(action);
```

####Store.removeBatch
Removes an array of values from a Store state array.
```javascript
Store.removeBatch(action, targetBatch);
```

>**V1.3 and down**  
Versions prior to V2 use the `updateStore` utility function to manage state. For documentation on this go [here](/api/deprecated#update-store).