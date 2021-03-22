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
First you need to install the TrebleGSM module `treble-persist`.

After you install it then import it into to your Store.

Add it to your Store’s option.module property.

Once this is done you can use the persist features.

### Set State Persistence
Add the features property to the Store item with the state you want to persist. Add the `persist` property to features. Set it to true to activate the state persistence. Now whenever the browser refreshes it will persist the state even if it is updated to something else before.

### Timeout Persisted State
You can set a timeout on persisted state. This might be handy if you have need the state to reset to default over a period of time. 

Add the property `persistTimeout` to the features property. Set the amount of hours the state should persist for.

Programmically Clear Persisted State
You can clear persisted state manually by calling a Store method.  

Import the useTreble hook.

Destructure the Store method from it. 
Pass the state name as a string to Store.clearPersist and call it to clear persisted state. 


> Note about persisting state: Treble persist saves and instance of your state to local storage and then hydrates the Store when your app reloads. This is how state is able to survive during reloads.
