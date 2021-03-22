---
path: "/api/advanced-features/extending-stores"
date: "2021-01-01"
title: "Extending Stores"
subMenu: 
    - text: ''
      path: '#'
---

As Stores grow they can get hard to maintain. Instead of having one huge Jesus Store, TrebleGSM allows a Store to be broken up into multiple Stores and then imported into a Master Store.  

### Extending a Store
First create a Store like you would normally create one. 

You can leave the first parameter of createStore as an empty array. 

The createStore function takes a second options parameter.  Pass an object with a method called extendStore.  This method will take an array of Stores.

Create a new Store. You can categorically namespace it something like ‘UIStore’ to better identify what relevant state it will hold.

Now import the new Store into the master Store and pass it to the extendStore method’s array. You may pass as many Stores as you like.  How much easier it is to maintain Store state when it is separated into multiple files!

### Accessing Extended Store State
Extended Stores differ from scoped Stores as they all share the same React Context instead of creating a new one.  You may access state from every Store with the same useTreble hook.

### Can Extended Stores Share Modules or Other Options
The quick answer is no.  Most option properties are ignored  by the master Store. If you need to add a Module or option please add it to the master Store to apply.

### Can Extended Stores be Extended Themselves
Extended Stores can be extended themselves, though it is probably not good practice to extend multiple levels. A flatter structure is best.
