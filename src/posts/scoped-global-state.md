---
path: "/docs/scoped-global-state"
date: "2019-05-04"
title: "Scoped Global State"
---
# Scoped Global State
There might be some use cases when a component, example being a complicated UI piece, might benefit from its own scoped global state.  Treble makes it easy to scope a seperate global state that is only known by that component. The steps are similar to setting up a normal Treble with a couple added steps.

## Create Treble Store
Create a `Store.js` file in the desired component folder structure. Example below.

```javascript
//scoped store

import { createStore } from 'treble-gsm';

const Store = createStore([

    {
        action: 'updatePokemonTrainer',
        state: {
            trainer: 'Ash'
        }
    }

],{
    options: {
        context: //scoped context
    }
});

export default Store;
```
## Create Scoped Context

Treble uses React's native [Context API](https://reactjs.org/docs/context.html) to manage global state under the hood. This means each instance of the Treble container has to utilize a unique instance of React Context. When no custom Context is passed to Treble it utilizes its default Context instance.  Scoped Treble components need a custom Context to work correctly.

You can create a scoped Context for the new `Store.js` by imported the `useScopedTreble` hook. Example below.

```javascript
import { useScopedTreble } from 'treble-gsm';
```

In your `Store.js` file assign `useScopedTreble` to a variable.

```javascript
const scopedContext = useScopedTreble();
```

Pass the `scopedContext` variable to the `Store` component's `options` parameter.

```javascript
//scoped store

import { createStore, useScopedTreble } from 'treble-gsm';

const scopedContext = useScopedTreble();

const Store = createStore([

    {
        action: 'updatePokemonTrainer',
        state: {
            trainer: 'Ash'
        }
    }

],{
    options: {
        context: scopedContext
    }
});

export default Store; 
```

The new `Store.js` is now set up as a scoped Store.

## Create Custom Treble Hook

Now that a scoped Store is set up a custom Treble hook must be created.  This hook will only subscribe to this scoped Store.

Import `useTreble` hook into your new scoped `Store.js`.

```javascript
import { useTreble } from 'treble-gsm';
```

Assign `useTreble` to a new custom hook variable and pass the `scopedContext` variable to it.

```javascript
const useNewTreble = () => useTreble(scopedContext);
```

>You can call the new hook variable anything you want, BUT it must start with *use*. See [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

You will then need to export the custom Hook from your `Store.js` file so it is accessible to the rest of the component. Final `Store.js` should look like below.

```javascript
//scoped store

import { createStore, useScopedTreble } from 'treble-gsm';

const scopedContext = useScopedTreble();
const useNewTreble = () => useTreble(scopedContext);

const Store = createStore([

    {
        action: 'updatePokemonTrainer',
        state: {
            trainer: 'Ash'
        }
    }

],{
    options: {
        context: scopedContext
    }
});

export { useNewTreble };
export default Store; 
```

## Wrap Components with Treble Container

This step is the same as setting up a normal Treble container.  The only difference is the scoped `Store` component will be passed to the `Treble` component's `store` prop.  To set up the Treble container [read here](#treble-container-component).

## Subscribe to Scoped Treble

This is the same as subscribing to the main `Store.js`. The difference is you will call the custom hook `useNewTreble` instead of the default `useTreble` hook. To subscribe to the Treble Store [read here](#subscribing-to-the-treble-store).

## Subscribing to Multiple Treble Stores in a Component.
If your component is utilizing a scoped Treble there still might be a case where you also want to utilize the App Store state. This can be done by calling both hooks.  Example below.

```javascript
import React, {useEffect} from 'react';
import {useTreble} from 'treble-gsm';
import {useNewTreble} from './_store';

function NestedComp(){

    const [{ pokemon }] = useTreble();
    const [{ pokemonTrainer }] = useNewTreble();

    return(
        <>          
            <p>{ pokemon } is the Pokemon Trainer { pokemonTrainer }'s favorite Pokemon</p>
            {/* Pikachu is the Pokemon Trainer Ash's favorite Pokemon */}
        </>
    )
}

export default NestedComp;
```

## Updating Multiple Treble Stores in a Component
This can be done easily by giving the `dispatch` function a unique name.

```javascript
const [{ pokemon }, dispatch] = useTreble();
const [{ pokemonTrainer }, dispatch2] = useNewTreble();

updateStore('updatePokemon', 'Misty', dispatch);
updateStore('updatePokemonTrainer', 'Psyduck', dispatch2);



