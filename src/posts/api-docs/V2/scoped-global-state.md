---
path: "/api/scoped-global-state"
date: "2019-05-04"
title: "Scoped Global State"
subMenu: 
  - text: 'Create Scoped Store' 
    path: '#create-scoped-store'
  - text: 'Create Scoped useTreble Hook' 
    path: '#create-scoped-usetreble-hook'
  - text: 'Connect Component to Store'
    path: '#connect-component-to-store'
  - text: 'Subscribing to Multiple Stores' 
    path: '#subscribing-to-multiple-stores'
  - text: 'Updating Multiple Stores' 
    path: '#updating-multiple-stores'
---

Creating complex React components like widgets can make state hard to maintain.  Especially when there are many nested components that need to pass state data to each other. Treble was created with the idea that the best part of React is it's component architecture. Putting local state into global state can defeat the purpose of working with components. With this in mind Treble has a way to scope global state to a component.

Imagine having a data grid component that displays rows and has search functionality.  The data grid has a main component which is made up of a table header row, data rows, and search inputs.  Each one of those are seperate components that live within the main component.  They all need to share some state and pass data between each other.  If only local state is used, then prop drilling and lifting up state create a component full of spagetti code.  If the state is put into the App's global state then you have a bunch of state that is only used by one component which bloats your App's global state. With scoped global state we can set up a Store within a component that will only allow that component and it's nested components to subscribe to it. Allowing the component to be what it was meant to be... a component!

#### Create Scoped Store
To create a scoped global state in our component a new instance of React Context will need to be created.

>Treble uses React's native [Context API](https://reactjs.org/docs/context.html) to manage global state under the hood. This means each instance of the Treble container has to utilize a unique instance of React Context. When no custom Context is passed to Treble it utilizes its default Context instance.  Scoped Treble components need a custom Context to work correctly.

Create a `Store.js` file in the desired component folder structure. You can learn more about creating a Treble Store by going [here](/api/setup#treble-store). `createStore` takes an optional option object as a second parameter. The `context` property will need to be added to this object. Example below.

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
    context: //scoped context
});

export default Store;
```




You can create a new Context instance by importing the `useScopedTreble` hook into the Store. Example below.

```javascript
import { useScopedTreble } from 'treble-gsm';
```

In your `Store.js` file assign `useScopedTreble` to a variable.

```javascript
const scopedContext = useScopedTreble();
```

Pass the `scopedContext` variable to the `Store` component's `context` property.

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
    context: scopedContext
});

export default Store; 
```

The Store is now a scoped Store.

#### Create Scoped useTreble Hook

Now that a scoped Store is set up, a custom useTreble hook must be created.  This hook will only subscribe to this scoped Store.

Import the `useTreble` hook into `Store.js`.

```javascript
import { useTreble } from 'treble-gsm';
```

Assign `useTreble` to a new custom hook variable and pass the `scopedContext` variable to it.

```javascript
const useNewTreble = () => useTreble(scopedContext);
```

>You can call the new hook anything you want, **BUT** it must start with *use*. See [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

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
    context: scopedContext
});

export { useNewTreble };
export default Store; 
```


#### Connect Component to Store
In order to connect a component to the Store, it will need to be wrapped by `withTreble`.  The `withTreble` function takes an options object parameter.  You will need to add a `store` property and pass the `Store` to it. Once this is set up the wrapped component and its children components will have access to the `Store`. Example below.

```javascript
const SomeScopedComp = withTreble(SomeComp, { store: Store })
export default SomeScopedComp;
```

#### Subscribing to Multiple Stores
If your component is utilizing scoped global state there still might be a scenario where your component needs to subscribe to the App's global state as well. All that needs to be done in this scenario is to import the default `useTreble` hook and destructure the state objects. Example below.
.

```jsx
import React from 'react';
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

#### Updating Multiple Stores
This can easily be accomplished by giving the useTreble `Store` object a unique name. Example below.

```javascript
const [{ pokemon }, Store] = useTreble();
const [{ pokemonTrainer }, NewStore] = useNewTreble();

Store.update('updatePokemon', 'Misty');
Store.update('updatePokemonTrainer', 'Psyduck');

```

Now your component has scoped global state and you can subscribe and update this state like you would with the App's gobal state.  Can you feel the power?!

