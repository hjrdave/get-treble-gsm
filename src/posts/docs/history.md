---
path: "/docs/history"
date: "2019-05-04"
title: "History"
subMenu: 
  - text: '' 
    path: ''
---

Treble provides an easy way to get the previous state value and to get the original state.

Delcare the `history` object in the `useTreble` destructured array.
```javascript
const [{ history }] = useTreble();
```

## Get Previous State
The `history` object keeps track of the previous state and saves it for use. You can access the state varibles by calling `history.prev['state']`.

```javascript
//object literal
history.prev['pokemon']

//dot syntax
history.prev.pokemon
```

## Reset State
You can also get the original state values by calling `history.reset['name']`.

```javascript
//object literal
history.reset['pokemon']

//dot syntax
history.reset.pokemon
```


