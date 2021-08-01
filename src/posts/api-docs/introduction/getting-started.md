---
path: "/api/introduction/getting-started"
date: "2021-01-01"
title: "Getting Started"
subMenu: 
    - text: ''
      path: '#'
---

TrebleGSM provides an easy and quick setup.  Below are the steps needed to get TrebleGSM installed and setup in your app, so you can start managing state like a boss! 💪

### Install
First install TrebleGSM in your app.  You can get more information about this package from [npm](https://www.npmjs.com/package/treble-gsm/v/2.1.4) or [yarn](https://classic.yarnpkg.com/en/package/treble-gsm). Node.js must be installed on your system. You can download Node.js [here](https://nodejs.org/en/).
```
npm install treble-gsm
```
or
```
yarn add treble-gsm
```

### Create a Store
Create a `Store.js` at the top level of your app folder structure. In `Store.js` you will import the function `createStore()` from `treble-gsm`.  Assign `createStore()` to a variable called `Store`. Example Below.
```javascript
import {createStore} from 'treble-gsm';

const Store = createStore();
```

### Add State Objects to the Store
The `createStore()` function takes an array of objects as its first parameter.  Each object has an `action` property and a `state` property. 

The `action` property acts as a string key identifier that allows TrebleGSM to identify which state to manage when the Store is subscribed to.  The `state` property takes an object key value pair that holds the state property and default value. Example below.
```javascript
const Store = createStore([

    //State Object 1
    {
        action: 'updatePokemon',
        state: {
            pokemon: 'Pikachu'
        }
    },

    //State Object 2
    {
        action: 'updatePokemonTrainer',
        state: {
            pokemonTrainer: 'Ash'
        }
    }
]);
export default Store;

```

### State Provider
The `Treble` component is the context provider that gives nested components access to the Store. Import `Treble` into your `App.js` or `Index.js` and wrap around all components. `Treble` has a prop called `store`. Import `Store` from `Store.js` into the page and pass it to the `store` prop. Example Below.
```JSX
import Treble from 'treble-gsm';
import {Store} from './Store';

function App(){
    return(
        <>
            <Treble store={Store}>
                //Children components
            </Treble>
        </>
    )
} 
```

Treble is now setup in your app! Easy as Sugar Creme Pie! &#129383; &#x1F929;
