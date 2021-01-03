---
path: "/api/middleware"
date: "2020-03-06"
title: "Middleware"
subMenu: 
  - text: 'Call' 
    path: '#call'
  - text: 'Check' 
    path: '#check'
  - text: 'Process' 
    path: '#process'
  - text: 'Disable Middleware' 
    path: '#disable-middleware'
---

Middleware provides a way for 3rd party functions to be called after state is dispatched and before it is saved back to the Store. You can use it for calling API's, logging, transforming state, or even to check dispatched state values before they are updated in the Store. This is a very powerful feature when dealing with global state and allows for a lot of possibilities. 

Treble can take three types of middleware functions `call`, `check`, and `process`.  Each are declared as a `features` property in a Store object.

> **Middleware Firing Order**  
Though the middleware types are independent of each other, they do have a firing order after state is dispatched. The `call` middleware type is asyncronous and will fire immediately.  The `check` middleware type fires right after state is dispatched. Once `check` runs then the `process` middlware type will fire. Each can run independent of each other.



#### Call
The `call` middleware takes a function that will be fired as soon as the state is dispatched.  The dispatched state can be passed to the `call` function, but that is optional.  Some use cases for this middleware could be to call an external API, logging, or routing.

In the example below a `call` middleware function is declared.  Everytime state is dispatched the `call` middlware will output the state to the console.

```javascript

const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Charizard' },
        features: {
          call: (state) => console.log(state);
        }
    }
]);
```

#### Check
The `check` middleware takes a function that will return a boolean value based on a `state` validation (hence the name check). Think of it as a state gatekeeper that only allows state to pass if it meets certain criteria. If the state value does not pass the `check` middleware function's criteria then it returns false and the dispatch is canceled.  Which means the Store will not be updated. 

In the example below we have a `check` middleware function that checks to see if the state value equals the string `'Pikachu'`. If the state value ever equals `'Pikachu'` then the state will not be updated to the Store.  Thus keeping those pesky Pikachus out of our Store.
 
```javascript

const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Charizard' },
        features: {
          check: (state) => {
            if(state !== 'Pikachu'){
              return true
            }
          }
        }
    }
]);
```

#### Process
The `process` middleware takes a function that processes or transforms the dispatched state to something else and then outputs the processed state to the Store.

In the example below the `process` middleware function prepends a string to the dispatched state and then outputs it to the Store.

```javascript

const Store = createStore([
    {
        action: 'updatePokemon',
        state: { pokemon: 'Charizard' },
        features: {
          process: (state) => return `Mega ${state}`
        }
    }
]);
```

If the dispatched state value is say `'Mewtwo'` then it will be updated to the Store as `'Mega Mewtwo'`.

#### Disable Middleware
In some cases you might want to bypass the Middleware pipeline when updating global state. This is easily done by adding the `disableMiddleware` property to the option parameter of the `Store.update` method and setting it's value to `true`. Example below.

```javascript
Store.update('updatePokemon','Pikachu',{ disableMiddleware: true });
```