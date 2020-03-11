---
path: "/docs/scoped-global-state"
date: "2019-05-04"
title: "Scoped Global State"
---
# Scoped Global State
The primary goal of Treble is to provide a quick setup and easy way to manage global state.  That being said there will always be scenerios where more advance functionality will be needed.  One of these scenerios would be having the ability to scope global state to specific components.  An example of this is a complex UI component that has many child components that need to share state.  Treble allows this to easily be done with it's Scoped Global State feature.  Setup is similar to setting up global state for the app, with a couple extra steps.

## Create Store
Create a `Store.js` file in the desired component folder structure. Unlike our initial Store setup we will add the options parameter to this one. Example below.

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

You can create a scoped Context for the new `Store.js` by importing the `useScopedTreble` hook into the Store. Example below.

```javascript
import { useScopedTreble } from 'treble-gsm';
```

In your `Store.js` file assign `useScopedTreble` to a variable.

```javascript
const scopedContext = useScopedTreble();
```

Pass the `scopedContext` variable to the `Store` component's `options.context` parameter.

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

>You can call the new hook anything you want, BUT it must start with *use*. See [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

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

## Wrap Components with the Treble Container

This step is the same as setting up a normal Treble container.  The only difference is the scoped `Store` component will be passed to the `Treble` component's `store` prop.  To set up the Treble container [read here](./setup-treble).

## Subscribe to Scoped Store

This is the same as subscribing to the main `Store.js`. The difference is you will call the custom hook `useNewTreble` instead of the default `useTreble` hook. To subscribe to the Treble Store [read here](./subscribe-and-update).

## Subscribing to Multiple Stores
If your component is utilizing a scoped Treble there still might be a case where you also want to utilize the main App Store state. This can be done by calling both hooks.  Example below.

```jsx
import React, { useEffect } from 'react';
import { useTreble } from 'treble-gsm';
import { useNewTreble } from './Store';

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

## Updating Multiple Stores
This can be done easily by giving the `dispatch` function a unique name.

```javascript
const [{ pokemon }, dispatch] = useTreble();
const [{ pokemonTrainer }, dispatch2] = useNewTreble();

updateStore('updatePokemon', 'Misty', dispatch);
updateStore('updatePokemonTrainer', 'Psyduck', dispatch2);

```

Now your component has scoped global state and you can subscribe and update this state like you would the main App gobal state.  I can feel the power!

