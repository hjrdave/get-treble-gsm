---
path: "/api/references/treble-list-manager"
date: "2021-01-01"
title: "Treble List Manager"
subMenu: 
    - text: ''
      path: '#'
---

## API Reference
Treble List Manager is a TrebleGSM module that can be imported into a TrebleGSM Store to make lists easier to manage.

### Feature Keys

### `keys`
For List Manager Dispatchers to work with Store state arrays they have to have unique keys so Treble can work with the lists. `keys` are set to true by default. 
```javascript
{
    ...,
    features: {
        keys: boolean
    }
}
```

### Dispatchers
### `Store.append`
Takes the current state array and appends the dispatched value.
```javascript
Store.append(actionKey, dispatchValue);
```

### `Store.prepend`
Takes the current state array and prepends the dispatched value.
```javascript
Store.prepend(actionKey, dispatchValue);
```

### `Store.edit`
Takes a state array item and allows the object to be edited in place.
```javascript
Store.edit(actionKey, editedStateItem);
```

### `Store.remove`
Removes a current list item from an array.
```javascript
Store.remove(actionKey, itemToRemove);
```

### `Store.removeBatch`
Removes multiple items from a state array.
```javascript
Store.removeBatch(actionKey, itemsToRemove);
```

### `Store.orderBy`
Sorts an object array by the specified order type.
```javascript
Store.orderBy(actionKey, targetProp, 'desc' | 'asc');
```

