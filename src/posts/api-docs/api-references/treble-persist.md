---
path: "/api/references/treble-persist"
date: "2021-01-01"
title: "Treble Persist"
subMenu: 
    - text: ''
      path: '#'
---

## API Reference
Treble Persist is a TrebleGSM module that can be imported into a TrebleGSM Store to add state persistence features.

### Feature Keys

### `features.persist`
The feature key `persist` can be set to true in a Store state object to save state to local storage.
```javascript
{
    //state object
    ...,
    features: {
        persist: boolean
    }
}
```

### `features.persistTimeout`
The feature key `persistTimeout` a number of hours can be set to refresh the persist after a given time.
```javascript
{
    //state object
    ...,
    features: {
        persistTimeout: number //example: 24
    }
}
```

### Dispatchers

### `Store.clearPersist`
Targets a specified Store state object and clears the item from local storage.
```javascript
Store.clearPersist(actionKey);
```