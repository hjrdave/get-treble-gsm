---
path: "/api/advanced/class-support"
date: "2021-01-01"
title: "Class Support"
subMenu: 
    - text: ''
      path: '#'
---

Even though TrebleGSM was created with React Hooks and functional components in mind, it can be used with Class components as well. 

The setup and API for class components differs a little from traditional setup but is still not a difficult process.

### Connecting Class Components to the Store
TrebleGSM provides a higher-order component called `withTreble`. To learn more about higher-order components click [here](https://reactjs.org/docs/higher-order-components.html). In order for a class component to get access to the Store it needs to be wrapped by the `withTreble` function and then assigned to a new component variable.  This augmented component can then be exported for use. Example below.
```javascript
import {withTreble} from 'treble-gsm';

class ClassComp extends Component {
    render() {
        return (
            <>
            </>
        )
    }
}
const TrebleClassComp = withTreble(ClassComp);
export default TrebleClassComp;
```

### Subscribe to the Store
Now that our class component has access to the Store we can subscribe to it.  

In functional components we are able to use React hooks like `useTreble` to get state data from the Store.  Class components do not support hooks. Fortunately the `withTreble` function passes a prop to the class component called `getTreble`. The `getTreble` prop can be destructured similarly to the `useTreble` hook.  Example below.
```javascript
const [{ pokemon, pokemonTrainer }, Store] = this.props.getTreble;
```

### Updating Store State
After the initial setup of connecting our class component to the Store, updating Store state in a class component is the same as updating the store in a functional component.  Example below.

```javascript
import {withTreble} from 'treble-gsm';

class ClassComp extends Component {

    const [{ pokemon, pokemonTrainer }, Store] = this.props.getTreble;

    render() {
        return (
            <>
                <button onClick={() => Store.update('updatePokemon', 'MewTwo')}>Update State</button>
            </>
        )
    }
}
const TrebleClassComp = withTreble(ClassComp);
export default TrebleClassComp;
```