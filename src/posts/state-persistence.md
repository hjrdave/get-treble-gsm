---
path: "/docs/state-persistence"
date: "2019-05-04"
title: "State Persistence"
---
# State Persistence

Treble allows the Store to save state to browser local storage if specified. In the optional `features` parameter, in the Store state object, set `persist` to `true`. See example below.

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

## Clearing Local Storage
There might be some cases where you need the persited state to reset. You can do this by calling the `clearPersist` function.

```javascript
import { clearPersist } from 'treble-gsm';

clearPersist(string);
```

`clearPersist` takes a string that is the name of the parameter.

```jsx
<button onClick={() => clearPersist('pokemon')}>Clear from Local Storage</button>
````