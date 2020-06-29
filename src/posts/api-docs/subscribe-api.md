---
path: "/api/experimental/subscribe-api"
date: "2020-27-06"
title: "SubscribeAPI"
subMenu: 
  - text: 'Store.update' 
    path: '#storeupdate'
  - text: 'Store.remove'
    path: '#storeremove'
  - text: 'Store.append'
    path: '#storeappend'
  - text: 'Store.prepend'
    path: '#storeprepend'
  - text: 'Store.orderBy'
    path: '#storeorderby'
  - text: 'Store.toggle'
    path: '#storetoggle'
---

TrebleGSM V2 will introduce a new api for subscribing to the Store. **SubscribeAPI** will allow for a cleaner interface, better error handling, and a more robust feature set then what **updateStore** could offer.

You can access the **SubscribeAPI** object with the useTreble hook.
```javascript
const [{}, dispatch, Store] = useTreble();
```

SubscribeAPI actually breaks up **updateStore** into 6 methods. Examples below.

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