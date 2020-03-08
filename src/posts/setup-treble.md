---
path: "/docs/setup-treble"
date: "2019-05-04"
title: "Setup Treble"
---
# Setup Treble
One of Treble's goals is for quick and easy setup in React apps.  Below are the steps needed to get Treble up and running and getting your app managing global state like a boss.

### Install Treble
First install Treble in your app.  You can get more information about this package from [npm](https://www.npmjs.com/package/treble-gsm) or [yarn](https://classic.yarnpkg.com/en/package/treble-gsm).

```terminal
npm install treble-gsm
```
or
```terminal
yarn add treble-gsm
```

### Create Store
Create a `Store.js` file in your app. Example below.

```javascript
import { createStore } from 'treble-gsm';

const Store = createStore([]);

export default Store;
```

### Add State Objects to Store
The `createStore` function holds an array of objects.  Each object will have an `action` property and a `state` property. 
The `action` property takes a string value that will be used by Treble to identify which state to update.  The `state` property takes an object key value pair that will be hold the global state. Example below.

```javascript
import { createStore } from 'treble-gsm';

const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Mewtwo' }
    },
    {
        action: 'updatePokemonGame',
        state: { pokemonGame: 'Pokemon Red' }
    }
]);

export default Store;
```

### Setup Treble Container
The `Treble` component container is the provider that provides nested components access to global state. Import `Treble` into your `App.js` or `Index.js` and wrap around components. `Treble` has a prop called `store`. Import `Store` into the page and pass it to the `store` prop.  Now your app has global state. Happy coding! Example Below.

```javascript
import  React  from  'react';
import  Treble  from  'treble-gsm';
import  Store  from  './_store';

const App = () => {
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}

export  default  App;
```
