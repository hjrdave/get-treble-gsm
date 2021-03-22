---
path: "/api/introduction/managing-state"
date: "2021-01-01"
title: "Managing State"
subMenu: 
    - text: ''
      path: '#'
---

Once TrebleGSM  is setup in your app, we want our components to subscribe to the Store. TrebleGSM has a simple and straightforward API for subscribing to a Store.

Subscribe with the useTreble Hook
Every component that is wrapped inside the `Treble` provider has access to the `useTreble` hook. This hook is used to read and update state in the Store. 

Import the useTreble hook into your component.


Assign useTreble to a destructured array to get access to Store state.


You can now use each store item in your component like you would with local state.


>Hooks **MUST** be called inside functional components. For more information read [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).

Update State with Store.update

Treble provides a simple and straightforward way to update state. The second array item useTreble returns is the Store subscribe object. This object has various methods for manipulating Store state.

To get access to the `Store` object we can destructure it from the `useTreble` hook.


The `Store` object has an `update` method that overwrites the existing Store Item state with a new one.

Updating state example below.

And tada your app now has global state management and is easily managed. Happy Coding!


