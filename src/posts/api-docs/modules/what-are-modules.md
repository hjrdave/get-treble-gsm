---
path: "/api/modules/what-are-modules"
date: "2021-01-01"
title: "What are Modules"
subMenu: 
    - text: ''
      path: '#'
---

Modules are an easy way to extend TrebleGSM’s functionality by 3rd party code. In fact, TrebleGSM’s dispatchers, re-render protection, and default state objects are all included in the library by the built-in Treble-Core module. You can literally say TrebleGSM is modular at its core! 🤓 

### How to Add a Module 
First install a module with npm.
```
npm install treble-list-manager
``` 

Then import the module into a TrebleGSM Store.
```javascript
import { TrebleListManager } from 'treble-list-manager';
```

The createStore function has an option property called `modules`. This property takes an array of modules. The imported module can be added to this property to be used by the Store.
```javascript
const Store = createStore([
    //...state items
],{
    modules: [ TrebleListManager ]
});
```

And that is it. Extending TrebleGSM is super easy! 👌👌
