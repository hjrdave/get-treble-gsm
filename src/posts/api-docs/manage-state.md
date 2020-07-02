---
path: "/api/manage-state"
date: "2019-05-04"
title: "Manage State"
subMenu: 
  - text: 'Subscribing to Store'
    path: '#subscribing-to-the-store-with-usetreble'
  - text: 'Updating State'
    path: '#updating-state-with-storeupdate'
---

Once global state is setup in your app, we will want our components to be able to read and manipulate the state from the Store. Treble has a simple and straightforward API for subscribing to and updating state in the Store.

#### Subscribing to the Store with useTreble
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

#### Updating State with Store.update

Treble provides a simple and straightforward **SubscribeAPI** with the `Store` object.

To get access to the **SubscribeAPI** `Store` object we can destructure it from the `useTreble` hook.

```javascript
const [{ pokemon, pokemonGame }, Store] = useTreble();
```

The `Store` object has an `update` method that overwrites the existing Store Item state with a new one.

```javascript
Store.update(action, dispatchValue)
```
Updating state example below.
```JSX
<button onClick={() => Store.update('updatePokemon', 'Mew')}>
  Update Pokemon
</button>

<p>{ pokemon } can be found in { pokemonGame }</p>
<!-- Mew can be found in Pokemon Red -->
```

And tada your app now has global state management and is easily managed. Happy Coding!

>**TrebleGSM V2 updateStore deprecation**  
The `updateStore` function will be deprecated in TrebleGSM V2 in favor of the new [SubcribeAPI](/api/subscribe-api). This new api is available as an experimental feature in V1.3.0. TrebleGSM V2 will remove `updateStore` completely in favor of the new API. For `updateStore` api documentation go [here](http://localhost:8000/api/deprecated#update-store).



