---
path: "/docs/toggle-state"
date: "2020-03-06"
title: "Toggle State"
subMenu: 
  - text: 'Create a Toggleable State' 
    path: '#create-a-toggleable-state'
  - text: 'Toggle State with updateStore'
    path: '#toggle-state-with-updatestore'
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

#### Toggle State with updateStore
The `updateStore` function is used to toggle a state object.  Along with the `action`, `value`, and `dispatch` parameters, `updateStore` also takes a 4th parameter. The 4th parameter is an options object that takes different key value pairs. Example below.
```javascript
updateStore(action, value, dispatch, {key: value});
```

To enable the toggle feature in `updateStore` the property `toggle` will be set to `true`. Example below.
```javascript
updateStore(action, value, dispatch, {toggle: true});
```

Now we can use `updateStore` to toggle the state value of `darkMode` from `true` to `false`.

> ##### Note About the Value Property
Setting the `toggle` property to `true` is not enough.  In order for the `updateStore` function to keep track of the toggle value, the toggleable state must be passed to the `value` property as well. In this case the `value` property is going to equal the `darkMode` state.

#### Example
Below is an example to demonstrate this feature. In the example there is a body tag with a conditional statement that adds the class `.darkMode` if the prop `darkMode` is `true` and then removes the class if the prop is `false`. A button element has an onClick handler with the `updateStore('darkMode', darkMode, dispatch, {toggle: true})` attached to it. When the button is clicked `updateStore` will now toggle the darkMode state to the opposite boolean value. Now you have a state value that is easily toggled!

```javascript
import React from 'react';
import {useTreble, updateStore} from 'treble-gsm';

function Page(){

  const [{darkMode}, dispatch] = useTreble();

  return(
    <body className={`${(darkMode) ? 'darkMode' : ''}`}>
      <button onClick={() => updateStore('darkMode', darkMode, dispatch, {toggle: true})}>Toggle</button>
    </body>
  )
}
```