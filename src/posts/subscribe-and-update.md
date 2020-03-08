---
path: "/docs/subscribe-and-update"
date: "2019-05-04"
title: "Subscribe and Update"
---
## Subscribe and Update

#### Subscribing to the Treble Store

Treble has a simple way of subscribing to the treble store via the `useTreble` hook.

```javascript
import { useTreble } from 'treble-gsm';
```

>Hooks MUST be called inside functional components. For more information read [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html). 

Assign `useTreble` to a destructured array to get access to store variables.

```javascript
const [{ pokemon, pokemonGame }] = useTreble();
```

You can now use each store variable in your component.

```html
<p>{ pokemon } can be found in { pokemonGame }</p>

<!-- Mewtwo can be found in Pokemon Red -->
```

#### Updating the Treble Store

To update the Treble Store you need to import the `updateStore()` function.

```javascript
import { updateStore } from 'treble-gsm';
```
The `updateStore` function takes three parameters.

```javascript
updateStore(action, value, dispatch);
```
***action*** - Takes a string value that matches the `Store: [{ action: string }]` value. This tells Treble which value you are wanting to update.

***value*** - Takes a string, object, array, or boolean value.  This value will replace the current `Store: [{ state: any }]` value.

***dispatch*** - Takes a `dispatch` function from the `useTreble` hook.

```javascript
const [{ pokemon, pokemonGame }, dispatch] = useTreble();

updateStore('updatePokemon', 'Pikachu', dispatch);
```

The `dispatch` function connects `updateStore()` to the `Store`.

When the `updateStore()` function is called with the appropriate parameters it will update the `Store`.

And tada your app now has global state management and it is easily managed. Happy Coding!



