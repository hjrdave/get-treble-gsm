---
path: "/api/class-components"
date: "2020-03-06"
title: "Class Components"
subMenu: 
  - text: 'withTreble( )' 
    path: '#with-treble'
  - text: 'Subscribe to Store' 
    path: '#subscribe-to-store'
  - text: 'Store.update' 
    path: '#storeupdate'
---

Even though Treble was created with React Hooks and functional components in mind, it is still important to provide support for class components. 

The setup and API for class components differs a little from the traditional setup but is still not difficult.

#### withTreble( )
Treble provides a higher-order component called `withTreble`. To learn more about higher-order components click [here](https://reactjs.org/docs/higher-order-components.html). In order for a class component to get access to a Treble Store it needs to be wrapped by the `withTreble` function and then assigned to a new component variable.  This augmented component can then be exported for use. Example below.

```javascript
import React, { Component } from 'react';
import { withTreble } from 'treble-gsm';

class ClassExample extends Component{
   render(){
       return(
         <p>Hello World!</p>
       )
   }
}

const TrebleClassExample = withTreble(ClassExample);
export default TrebleClassExample;

```

#### Subscribe to Store
Now that our class component has access to the Store we can subscribe to it.  

In functional components we are able to use React hooks like `useTreble` to get state data from the Store.  Class components do not support hooks though. Fortunately the `withTreble` function passes a prop to the wrapped class called `getTreble`. The `getTreble` prop can be destructured similarly to the `useTreble` hook.  Example below.

```javascript
import React, { Component } from 'react';
import { withTreble } from 'treble-gsm';

class ClassExample extends Component{
   render(){
      const [{pokemon, pokemonGame}] = this.props.getTreble;
       return(
         <p>{`My favorite pokemon in the game ${pokemonGame} is ${pokemon}`}</p>
       )
   }
}

const TrebleClassExample = withTreble(ClassExample);
export default TrebleClassExample;
```

#### Store.update
After the initial setup of connecting our class component to our Treble Store, updating the store in a class component is the same as updating the store in a functional component.  Example below.

```javascript
import React, { Component } from 'react';
import { withTreble } from 'treble-gsm';

class ClassExample extends Component{
   render(){
      const [{pokemon, pokemonGame}, Store] = this.props.getTreble;
       return(
         <p>{`My favorite pokemon in the game ${pokemonGame} is ${pokemon}`}</p>
         <button onClick={() => Store.update('updatePokemon', 'Pikachu')}>My Actual Favorite Pokemon</button>
       )
   }
}

const TrebleClassExample = withTreble(ClassExample);
export default TrebleClassExample;
```