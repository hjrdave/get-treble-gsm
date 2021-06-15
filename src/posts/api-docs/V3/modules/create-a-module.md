---
path: "/api/modules/create-a-module"
date: "2021-01-01"
title: "Create a Module"
subMenu: 
    - text: ''
      path: '#'
---

TrebleGSM module development is an advanced area of TrebleGSM. Please review the [How TrebleGSM Works](/api/advanced/how-treble-gsm-works) article before you proceed reading.
### Create a Basic Module
To create a module, import the `createModule()` function.
```javascript
import {createModule} from 'treble-gsm';
```
Assign `createModule()` to a variable. The variable should be named after your module.
```javascript
const TrebleExampleModule = createModule();
```
The `createModule()` function takes an object that has properties that allow the module to hook into different parts of TrebleGSM. Below is an example of a basic module with a dispatcher and reducer action.
```javascript
const TrebleExampleModule = createModule({
    name: 'treble-example-module',
    dispatchers: {
        'dispatcherExample': //dispatcher function,
    },
    reducerActions: {
        'reducerActionExample': //reducerAction function
    }
});
export default TrebleExampleModule;
```

### Use Extended Module Features
Now that TrebleGSM has been extended by the `TrebleExampleModule`, the `useTreble` hook's `Store` function now has access to the new dispatcher that we added.
```javascript
const [{/*state objects*/}, Store] = useTreble();

<button onClick={() => Store.dispatcherExample('updateSomeState', 'This is a dispatchValue')}>
```
The above is a basic module that can be used to extend TrebleGSM features.


 

