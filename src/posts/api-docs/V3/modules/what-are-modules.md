---
path: "/api/modules/what-are-modules"
date: "2021-01-01"
title: "What are Modules"
subMenu: 
    - text: ''
      path: '#'
---

Modules are an easy way to extend TrebleGSM’s functionality by 3rd party code. In fact, TrebleGSM’s Dispatchers, re-render protection, and default state objects are all included in the library by the built-in Treble-Core module. You can literally say TrebleGSM is modular at its core. 

How to Add a Module

Modules are imported into a TrebleGSM Store.

Import the module into the Store file.

[code]

The createStore function takes has an options property called modules. This property takes an array of modules. The module can be added to this property to be used by the Store.

And that is it. Extending TrebleGSM is super easy!
