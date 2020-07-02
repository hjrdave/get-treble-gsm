---
path: "/api/toggle-state"
date: "2020-03-06"
title: "Toggle State"
subMenu: 
  - text: 'Create a Toggleable State' 
    path: '#create-a-toggleable-state'
  - text: 'Toggle State with Store.toggle'
    path: '#toggle-state-with-storetoggle'
---

There are many times when creating features for our apps that we need a simple on and off functionality. An example being a dark mode switch for our app or website. State would hold a boolean value and change back and forth depending on when the switch is clicked, which could add a dark-mode class to the app based on if the state was true or false.  

Treble has a built in feature to help toggle state without having to recreate logic every time it needs to be implemented.

#### Create a Toggleable State
Lets start by adding a `darkMode` state object into our Store. Example Below

> In order for state to be toggleable it must be a boolean value. 

```javascript
import React from 'react';
import {createStore} from 'treble-gsm';

const Store = createStore([
  {
    action: 'darkMode',
    state: {darkMode: false}
  }
])

```

#### Toggle State with Store.toggle
``Store.toggle`` takes an action key and the current toggleable state and then toggles the state from one boolean value to another.
```javascript
Store.toggle(action, toggleState)
```
#### Example
Below is an example to demonstrate this feature. In the example there is a body tag with a conditional statement that adds the class `.darkMode` if the prop `darkMode` is `true` and then removes the class if the prop is `false`. A button element has an onClick handler with `Store.update('darkMode', darkMode)` attached to it. When the button is clicked `Store.toggle` will toggle the darkMode state to the opposite boolean value. Now you have a state value that is easily toggled!

```javascript
import React from 'react';
import {useTreble, updateStore} from 'treble-gsm';

function Page(){

  const [{darkMode}, Store] = useTreble();

  return(
    <body className={`${(darkMode) ? 'darkMode' : ''}`}>
      <button onClick={() => Store.toggle('toggleDarkMode', darkMode)}>Toggle</button>
    </body>
  )
}
```