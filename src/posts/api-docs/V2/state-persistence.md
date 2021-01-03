---
path: "/api/state-persistence"
date: "2019-05-04"
title: "State Persistence"
subMenu: 
  - text: 'Set State Persistence' 
    path: '#set-state-persistence'
  - text: 'Clear Local Storage'
    path: '#clear-local-storage'
---

React state only exists in the initial instance of your app.  If your app reloads then state is reset to its default value. This can cause issues when state needs to be saved outside of the app instance.  Treble allows the Store to save state to the browser's local storage when specified.

#### Set State Persistence

Create a new property called `features` in the Store object you want to persist state.  Assign `features` an object with a property of `persist`.  If you set `persist` to `true` it will save that Store object's state to browser local storage everytime it changes. See example below.

```javascript

{
    action: 'updatePokemon',
    state: { pokemon: 'Mewtwo' },
    features: {
        persist: true;
    }
}
```

Now whenever the browser is refreshed Treble will make sure the last state persists on render.

#### Clear Local Storage
There might be some cases where you need the persited state to reset. You can do this by calling the `clearPersist` function.

```javascript
import { clearPersist } from 'treble-gsm';

clearPersist(string);
```

`clearPersist` takes a string that is the name of the parameter.

```jsx
<button onClick={() => clearPersist('pokemon')}>Clear from Local Storage</button>
````

When this function is called it will delete the browser local storage instance of that state.