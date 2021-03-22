---
path: "/api/advanced-features/managing-lists"
date: "2021-01-01"
title: "Managing Lists"
subMenu: 
    - text: ''
      path: '#'
---

Managing state lists aka object arrays are a very common occurrence in UI Development.  TrebleGSM makes managing lists a breeze. 

First install the Treble List Manager module.

### Import the module into your Store.

After the Treble List Manager module is installed and imported into your Store you will have access to a number of Dispatcher methods and Store features that will help you manage lists with ease.

### Static Keys
In order for React to manage lists, each list item needs a static key. TrebleGSM assigns static keys to array objects by default. The static key method is called trebleKey. This method is used by Dispatchers to handle different types of CRUD operations. To turn this feature off you can set the Feature flag keys to false. This is true by default.

### Store.append
You might have an array of objects in state.  Lets say each object is a todo item. It has an id, title, and due date property.  We want to add another todo item to our todo list (array). Under normal circumstances we would need to get the entire todo list and append the new item to it and then `Store.update` the entire todo list (object array) to the store.  This works fine but doing this repetively thoughout our app can cause us to rewrite the same code over and over agian. 

Instead of doing this we can use the `Store.append` method to just *append* the single todo to our current store list. Method API below.


### Store.prepend
Prepending state is similar to appending state. Instead of appending the new state item to the end of the list it will prepend it to the top. Example below.
The `newTodo` is now prepended to our todo list. The new output will look like below.


### Store.remove
Removing a state object from a list is super easy with the `Store.remove` method. This method is different from `Store.append` and `Store.prepend` in that the dispatched value is what will be removed from the list. Treble will take the dispatched targetValue and compare it to items in the list. When a match is found that list item will be removed. API below.

Example for removing a todo list item below.

When the button is clicked it will take the `removeTodo` object and see if it can find a match in the Todos list. When it finds a match it will remove that object from the Todos list.


### Store.edit
TBA

### Store.orderBy
Sorting state alphabetically has never been easier. The `Store.orderBy` method supports two types of sorting, *ascending* `'asc'` and *descending* `'desc'`. API below.

>The `orderBy` is smart enough to sort in numerical order if the sort targets properties with integers.


### Store.removeBatch
The removeBatch method is similar to remove but it takes an array of objects that TrebleGSM will find and remove from the list.
