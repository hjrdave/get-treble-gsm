---
path: "/docs/subscribe-and-update"
date: "2019-05-04"
title: "Subscribe and Update"
---
# Subscribe and Update
Once global state is setup in your app, we will want our components to be able to read and manipulate the state from the Treble Store. Treble has a simple and straightforward API for subscribing to and updating state in the Store.

## Subscribing to the Store
Every component that is wrapped inside the `Treble` container component has access to the `useTreble` hook. This hook is used to get access to the state variable from the Store. 

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

> Hooks MUST be called inside functional components. For more information read [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).

## Updating the Store
Treble provides a simple utility function called `updateStore` that can be called inside your component to update state in the Store.

Import `updateStore` into your component.

```javascript
import { updateStore } from 'treble-gsm';
```

The `updateStore` function takes three parameters.

```javascript
updateStore(action, value, dispatch);
```

**action** - Takes a string value that matches the `Store: [{ action: string }]` value. This tells Treble which value you are wanting to update.

**value** - Takes a string, object, array, or boolean value.  This value will replace the current `Store: [{ state: any }]` value.

**dispatch** - Takes a `dispatch` function from the `useTreble` hook. Dispatch is used to connect `updateStore` to the appropriate Store. 

```javascript
const [{ pokemon, pokemonGame }, dispatch] = useTreble();

updateStore('updatePokemon', 'Pikachu', dispatch);
```

When the `updateStore` function is called with the appropriate parameters it will update the `Store`.

And tada your app now has global state management and it is easily managed. Happy Coding!



