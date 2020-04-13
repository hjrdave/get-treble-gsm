---
path: "/api/setup"
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

It is Treble's goal to provide an easy and quick setup.  Below are the steps needed to get Treble setup in your app, so you can start managing state like a boss.

### Install
First install Treble in your app.  You can get more information about this package from [npm](https://www.npmjs.com/package/treble-gsm) or [yarn](https://classic.yarnpkg.com/en/package/treble-gsm). Node.js must be installed globally and locally in your project first. You can download node.js [here](https://nodejs.org/en/).

```terminal
npm install treble-gsm
```
or
```terminal
yarn add treble-gsm
```
### Treble Store
The Store is a file that will act as the central place for shared state in your app. 

> ##### A Note About Treble Global State Principles
There are different schools of thought on what should be put into global state.  Some popular libraries like Redux suggest putting all state into the global state.  Though there are advantages to doing this, it is my opinion that only state that needs to be shared amongst components should be put in the global state.  React does local state well and if that state is only used by that component then it should stay in that component.  Putting all state into the global state can make global state get huge and defeat the purpose of having component based architecture. Treble works with the idea that app state is best managed as a combination of local and global state.

#### Create Store
To setup a Treble Store in your app create `Store.js` at the top level of your app folder structure. In `Store.js` you will import the function `createStore` from `treble-gsm`.  Assign `createStore` to a variable called `Store`. Example Below.

```javascript
import { createStore } from 'treble-gsm';

const Store = createStore();

export default Store;
```

#### Add State Objects to Store
The `createStore` function takes an array of objects as it's parameter.  Each object has an `action` property and a `state` property. 
The `action` property acts as a string key identifier that allows Treble to identify which state to manage when the Store is subscribed to.  The `state` property takes an object key value pair that will hold the global state property and default value. Example below.

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

### Treble Container
The `Treble` component container is the context provider that gives nested components access to global state. Import `Treble` into your `App.js` or `Index.js` and wrap around components. `Treble` has a prop called `store`. Import `Store` from `Store.js` into the page and pass it to the `store` prop. Example Below.

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
Treble is now setup in your app! Easy as Sugar Creme Pie!