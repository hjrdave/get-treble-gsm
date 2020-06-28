---
path: "/api/manage-state"
date: "2019-05-04"
title: "Manage State"
subMenu: 
  - text: 'Subscribe to Store'
    path: '#subscribe-to-store'
  - text: 'Update Store'
    path: '#update-store'
---

Once global state is setup in your app, we will want our components to be able to read and manipulate the state from the Store. Treble has a simple and straightforward API for subscribing to and updating state in the Store.

#### Subscribe to Store
Every component that is wrapped inside the `Treble` container component has access to the `useTreble` hook. This hook is used to get access to state variables from the Store. 

First we need to import the `useTreble` hook into our component.

```javascript
import { useTreble } from 'treble-gsm';
```

Assign `useTreble` to a destructured array to get access to store variables.

```javascript
const [{ pokemon, pokemonGame }] = useTreble();
```

You can now use each store variable in your component like you would with local state.

```html
<p>{ pokemon } can be found in { pokemonGame }</p>

<!-- Mewtwo can be found in Pokemon Red -->
```

> Hooks **MUST** be called inside functional components. For more information read [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).

#### Update Store

Treble provides a simple utility function called `updateStore` that can be called inside your component to update state in the Store.

Import `updateStore` into your component.

```javascript
import { updateStore } from 'treble-gsm';
```

The `updateStore` function takes three parameters.

```javascript
updateStore(action, value, dispatch);
```

`action` - Takes a string value that matches the Store action of the state you want to update. This tells Treble which value you are looking for.

`value` - Takes a string, object, array, or boolean value.  This value will replace the current matched state value.

`dispatch` - Takes a `dispatch` function from the `useTreble` hook. Dispatch is used to connect `updateStore` to the appropriate Store. Example Below.

```javascript
const [{ pokemon, pokemonGame }, dispatch] = useTreble();

updateStore('updatePokemon', 'Pikachu', dispatch);
```

When the `updateStore` function is called with the appropriate parameters it will update the Store.

And tada your app now has global state management and is easily managed. Happy Coding!

>**TrebleGSM V2 updateStore deprecation**  
The `updateStore` function will be deprecated in TrebleGSM V2 in favor of the new [SubcribeAPI](/api/subscribe-api). This new api is available as an experimental feature in V1.3.0. TrebleGSM V2 will remove `updateStore` completely in favor of the new API.



