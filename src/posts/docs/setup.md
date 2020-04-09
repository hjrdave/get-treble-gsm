---
path: "/docs/setup"
date: "2019-05-04"
title: "Setup"
subMenu: 
  - text: 'Install' 
    path: '#install'
  - text: 'Treble Store'
    path: '#treble-store'  
  - text: 'Treble Container'
    path: '#treble-container'
---

It is Treble's goal to provide and easy and quick setup.  Below are the steps need to get Treble setup in your app, so you can start to managing state like a boss.

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
The `action` property takes a string value that lets Treble identify which state to update.  The `state` property takes an object key value pair that will hold the global state. Example below.

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
The `Treble` component container is the context provider that gives nested components access to global state. Import `Treble` into your `App.js` or `Index.js` and wrap around components. `Treble` has a prop called `store`. Import `Store` from `Store.js` into the page and pass it to the `store` prop.  Now your app has global state. Happy coding! Example Below.

```jsx
import  React  from  'react';
import  Treble  from  'treble-gsm';
import  Store  from  './Store';

function App(){
    return (
        <Treble store={Store}>
            {/* Components */}
        </Treble>
    );
}

export  default  App;
```
