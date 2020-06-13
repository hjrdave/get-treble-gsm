---
path: "/api/list-management"
date: "2020-15-5"
title: "List Management"
subMenu: 
  - text: 'Append State'
    path: '#append-state'
  - text: 'Prepend State'
    path: '#prepend-state'
  - text: 'Limit List Length'
    path: '#limit-list-length'
  - text: 'Remove State'
    path: '#remove-state'
  - text: 'Sort State'
    path: '#sort-state'
---

Often state will hold an array of state that will be used to render UI lists or other types of data lists. I believe it is important to have a simple and easy way to manage groups of data without having to rewrite code everytime functionality is needed. List management is a middleware module that is built into Treble that will handle arrays of state through a simple api.

#### Append State
You might have an array of objects in state.  Lets say each object is a todo item. It has an id, title, and due date property.  We want to add another todo item to our todo list (array). Under normal circumstances we would need to get the entire todo list and append the new item to it and then redispatch the entire todo list (object array) to the store.  This works fine but doing this repetiviely thoughout our app can cause us to rewrite the same code over and over agian. 

Instead of doing this we can use an `updateStore` **option** called `append` to just *append* the single todo to our current store list. 

A store is created that has our todo state object with two todo list items.
```javascript
const Store = createStore([
  {
    action: 'updateTodos'
    state: {
      todos: [
        {
          id: 1234,
          title: 'Time to update the Foo',
          dueDate: 'Tomorrow'
        },
        {
          id: 1235,
          title: 'Time to update more Foo',
          dueDate: 'Thursday'
        }
      ]
    }
  }
])
```
We want to *append* another todo item to this current list. A new todo item is created and attached to an object.
```javascript
const newTodo = {
  id: 1236,
  title: 'Time to finish all the Foo',
  dueDate: 'Friday'
}
```
A button can be created to add this new todo to the store.  The onClick handler will set off an `updateStore` dispatch with the `append` option set to true.
```javascript
<button onClick={() => updateStore('updateTodo', newTodo, dispatch,{append: true})}>Add Todo</button>
```
And tada the todo list is not overwritten, instead the `newTodo` has been appended to the list. If the `todos` state is outputed it would now look like this.
```javascript
console.log(todos);
//new state
/*[
    {
      id: 1234,
      title: 'Time to update the Foo',
      dueDate: 'Tomorrow'
    },
    {
      id: 1235,
      title: 'Time to update more Foo',
      dueDate: 'Thursday'
    },
    {
      id: 1236,
      title: 'Time to finish all the Foo',
      dueDate: 'Friday'
    }
]*/
```
#### Prepend State
Prepending state is similar to appending state. Instead of appending the new state item to the end of the list it will prepend it to the top. Example below.
```javascript
const newTodo = {
  id: 1236,
  title: 'Time to finish all the Foo',
  dueDate: 'Friday'
}
<button onClick={() => updateStore('updateTodos', newTodo, dispatch, {prepend: true})}>Add Todo</button>
```
The `newTodo` is now prepended to our todo list. The new output will look like below.
```javascript
console.log(todos);
//new state
/*[
   {
      id: 1236,
      title: 'Time to finish all the Foo',
      dueDate: 'Friday'
    },
    {
      id: 1234,
      title: 'Time to update the Foo',
      dueDate: 'Tomorrow'
    },
    {
      id: 1235,
      title: 'Time to update more Foo',
      dueDate: 'Thursday'
    }
]*/
```

#### Limit List Length
Along with appending and prepending state to a list you can set a limit on the list. This will effectively remove list objects as new ones are added. The items removed will depend on the whether the option `append` or `prepend` is being used with the state dispatch. Examples below.

```javascript
//state objects with the lowest index will be removed when limit is reached.
updateStore('updateTodos', newTodo, dispatch,{append: true, limit: 3});

//state objects with the highest index will be removed when limit is reached.
updateStore('updateTodos', newTodo, dispatch, {prepend: true, limit: 3}) 
```

#### Remove State
Removing a state object from a list is super easy with the `remove` option. This action is different from `append` and `prepend` in that the dispatched value is what will be removed from the list. The API for this is `updateStore(action, [value to be removed], dispatch, {remove: true})`. Example below.

```javascript
//Current Todos state
/*
[
   {
      id: 1236,
      title: 'Time to finish all the Foo',
      dueDate: 'Friday'
    },
    {
      id: 1234,
      title: 'Time to update the Foo',
      dueDate: 'Tomorrow'
    },
    {
      id: 1235,
      title: 'Time to update more Foo',
      dueDate: 'Thursday'
    }
]
*/
const removeTodo = {
  id: 1234,
  title: 'Time to update the Foo',
  dueDate: 'Tomorrow'
}
<button onClick={() => updateStore('updateTodos', removeTodo, dispatch, {remove: true}}>Remove Todo</button>
```

When the button is clicked it will take the `removeTodo` object and see if it can find a match in the Todos list. When it finds a match it will remove that object from the Todos list.
```javascript
//New Todos list
/*
[
   {
      id: 1236,
      title: 'Time to finish all the Foo',
      dueDate: 'Friday'
    },
    {
      id: 1235,
      title: 'Time to update more Foo',
      dueDate: 'Thursday'
    }
]
*/
```


#### Sort State
Sorting state alphabeticly has never been easier. The `updateStore` option `orderBy` supports two types of sorting. *Ascending* `asc` and *Descending* `desc`. The API for this is `updateStore(action, [target property to sort], dispatch, {orderBy: 'asc' | 'desc'})`. Example Below.
```javascript

//My favorite deserts ranked
/*
[
    {
      rank: 4,
      title: 'German Chocolate'
    },
    {
      rank: 2,
      title: 'Apple Pie'
    },
    {
      rank: 1,
      title: 'Zucchini bread'
    },
    {
      rank: 3,
      title: 'Red Velvet'
    },  
]
*/

<button onClick={() => updateStore('updateTodos', 'title', dispatch, {orderBy: 'asc' }}>
  Sort list Alphabetically
</button>
```

Sorted output below.
```javascript
//My favorite deserts in alphabetical order (A-Z)
/*
[
  {
    rank: 2,
    title: 'Apple Pie'
  },
  {
    rank: 4,
    title: 'German Chocolate'
  },
  {
    rank: 3,
    title: 'Red Velvet'
  }, 
  {
    rank: 1,
    title: 'Zucchini bread'
  }
]
*/
```
>The `orderBy` is smart enough to sort in numerical order if the sort targets properties with integers.