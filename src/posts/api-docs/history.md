---
path: "/api/history"
date: "2019-05-04"
title: "History"
subMenu: 
  - text: '' 
    path: ''
---

Treble provides an easy way to get previous and original state values. Every Store has a built in History object that tracks state changes. 
> ##### Note About the History Object
The word ***history*** is reserved in Treble and should not be used as an identifier for other state. Neither should the `action` string `'updateHistory'` be used as a key identifier.

Delcare the `history` object in an `useTreble` destructured array.
```javascript
const [{ history }] = useTreble();
```

#### Get Previous State
The `history` object keeps track of the previous state and saves it for later use. You can access the state variables by calling `history.prev['stateName']`.

```javascript
//object literal
history.prev['pokemon']

//dot syntax
history.prev.pokemon
```

#### Reset State
You can also get the original state values by calling `history.reset['stateName']`.

```javascript
//object literal
history.reset['pokemon']

//dot syntax
history.reset.pokemon
```


