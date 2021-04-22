---
path: "/api/advanced-features/persisting-state"
date: "2021-01-01"
title: "Persisting State"
subMenu: 
    - text: ''
      path: '#'
---

State persistence is state that persists even after the browser refreshes the application.  Traditionally state does not do this.  When your app reloads the current state is refreshed as well. TrebleGSM has an easy way to make sure select state is persisted even after a browser refresh.

### Install Treble Persist Module
First you need to install the TrebleGSM module `treble-persist`. For more information on TrebleGSM Modules go [here](http://localhost:8000/api/modules/what-are-modules).
```javascript
npm install treble-persist
```
or
```javascript
yarn add treble-persist
```

After you install it then import it into to your Store.
```javascript
import TreblePersist from 'treble-persist';
```

Add it to your Store’s option.module property.
```javascript
const Store = createStore([],{
    modules: [
        TreblePersist 
    ]
});
```

Once this is done you TrebleGSM now has state persistence!

### Set State Persistence
Add the `features` property to the Store item with the state you want to persist. Add the `persist` property to `features`. Set it to `true` to activate state persistence for that peticular state item. 
```javascript
const Store = createStore([
      {
          action: 'updateUserName',
          state: {
              userName: 'Ash Ketchum'
          },
          features: {
              persist: true
          }
      }
  ],{ 
        modules: [ TreblePersist ] 
    }
);
```
Now whenever the browser refreshes it will persist the state even if it is updated to something else. 🪄🪄

### Timeout Persisted State
You can set a timeout on persisted state. This might be handy if you have need for state to reset to the default value over a period of time. 


Add the property `persistTimeout` to the `features` property. Set the amount of hours the state should persist for.
```javascript
features: { persist: true, persistTimeout: 48 }
```

### Programmically Clear Persisted State
You can clear persisted state manually by calling a Store method.
```javascript
const [State, Store] = useTreble();
```  

Pass the state name as a string to `Store.clearPersist` and call it to clear persisted state. 
```javascript
Store.clearPersist('userName');
```


> Note about persisting state: Treble persist saves and instance of your state to local storage and then hydrates the Store when your app reloads. This is how state is able to survive during reloads.
