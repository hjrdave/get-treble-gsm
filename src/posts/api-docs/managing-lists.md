---
path: "/api/managing-lists"
date: "2020-2-7"
title: "Managing Lists"
subMenu: 
  - text: 'Store.append'
    path: '#storeappend'
  - text: 'Store.prepend'
    path: '#storeprepend'
  - text: 'Store.remove'
    path: '#storeremove'
  - text: 'Store.orderBy'
    path: '#storeorderby'
  # - text: 'Limit list Length'
  #   path: '#limit-list-length'
---

Often developers will need to manage an array of state that will be used to render UI lists or other types of data lists. I believe it is important to have a simple and easy way to manage groups of data without having to rewrite code everytime functionality is needed. Treble's **SubscribeAPI** has built-in methods for handling lists in an easy and efficient way.

#### Store.append
You might have an array of objects in state.  Lets say each object is a todo item. It has an id, title, and due date property.  We want to add another todo item to our todo list (array). Under normal circumstances we would need to get the entire todo list and append the new item to it and then `Store.update` the entire todo list (object array) to the store.  This works fine but doing this repetively thoughout our app can cause us to rewrite the same code over and over agian. 

Instead of doing this we can use the `Store.append` method to just *append* the single todo to our current store list. Method API below.

```javascript
Store.append(action, dispatchValue);
```
**Example:** A store is created that has our todo state object with two todo list items.

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
A button can be created to add this new todo to the store.  The onClick handler will set off a `Store.append`.
```javascript
<button onClick={() => Store.append('updateTodo', newTodo)}>Add Todo</button>
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
#### Store.prepend
Prepending state is similar to appending state. Instead of appending the new state item to the end of the list it will prepend it to the top. Example below.
```javascript
const newTodo = {
  id: 1236,
  title: 'Time to finish all the Foo',
  dueDate: 'Friday'
}
<button onClick={() => Store.prepend('updateTodos', newTodo)}>Add Todo</button>
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

#### Store.remove
Removing a state object from a list is super easy with the `Store.remove` method. This method is different from `Store.append` and `Store.prepend` in that the dispatched value is what will be removed from the list. Treble will take the dispatched targetValue and compare it to items in the list. When a match is found that list item will be removed. API below.
```javascript
Store.remove(action, targetValue);
```
Example for removing a todo list item below.
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
<button onClick={() => Store.remove('updateTodos', removeTodo)}>Remove Todo</button>
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


#### Store.orderBy
Sorting state alphabetically has never been easier. The `Store.orderBy` method supports two types of sorting, *ascending* `'asc'` and *descending* `'desc'`. API below.
```javascript
Store.orderBy(action, targetProperty, orderType);
```
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

<button onClick={() => Store.orderBy('updateTodos', 'title', 'asc')}>
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

<!-- #### Limit list length
Along with appending and prepending state to a list you can set a limit on the list. This will effectively remove list objects as new ones are added. The items removed will depend on the whether the option `append` or `prepend` is being used with the state dispatch. Examples below.

```javascript
//state objects with the lowest index will be removed when limit is reached.
updateStore('updateTodos', newTodo, dispatch,{append: true, limit: 3});

//state objects with the highest index will be removed when limit is reached.
updateStore('updateTodos', newTodo, dispatch, {prepend: true, limit: 3})  
``` -->