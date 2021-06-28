---
path: "/api/advanced/core-concepts"
date: "2021-01-01"
title: "Core Concepts"
subMenu: 
    - text: ''
      path: '#'
---

I consider TrebleGSM an unopinionated GSM. Developers can use it in whatever way works best for their team or application environment. That being said I do believe there are some best practices and/or core concepts that can help a new developer be successful when starting out with TrebleGSM.

### Global State is not for All State
Some popular GSM's like React Redux encourage developers to centralize all component state. There are advantages to this method, but this comes with its own issues. It is often tedious to put every piece of component state into the GSM. It also defeats React’s component architecture. Having a self-contained component with all of the state, styling, logic, and markup is what makes component based front-ends so magnificent. When all state is put in the global state this breaks this design pattern and makes creating components tedious.

It is of my opinion that state should only be put in the GSM when it makes sense to do so.  React manages local state very well, and if that state does not need to be used by other components then it should live within its host component. If state will be shared amongst many components then it should be put in the GSM to prevent prop drilling and lifting up state.

This separation is important to enjoy the best parts of React, but also to have the added benefit and power of a GSM.

### Naming Conventions
**createStore name assignment** – The variable name for creating a Store can be called `Store`. 
```javascript
const Store = createStore();
```
Scoped Stores can be namespaced by their component.

```javascript
const widgetStore = createStore()
```

*Store Actions* – These should always be an action word that describes the subscribe action when manipulating Store state. Example: ‘updateFruitName’ or ‘appendListItem’.

*Treble Hook Methods* - The useTreble hook returns an array of 3 items, current state, a subscribe method, and an utilities method. When destructering the array you technically can name each item anything you want. For the sake of consistency each item should follow a specific naming convention.

```javascript
//State is a destructured object
//Store Method = Store
//Utilities Method = Util

[ { /* Some State */ }, Store, Util ] = useTreble();
```

*Scoped Treble Hook Methods* – The same pattern can be followed with scoped treble hooks, except with a namespace to differentiate between the global hook and the scoped hook.

```javascript
//State is a destructured object
//Store Method = widgetStore
//Utilities Method = widgetUtil

[ { /* Some State */ }, widgetStore, widgetUtil ] = useTreble();
```
### Scoping a Store
Scoped Stores allow complex components to use their own encapsulated GSM that cannot be accessed by outside components. Below are some best practices.

*Use only where it makes sense* - Every Treble Store instance creates a new React Context and to many might create performance issues. In most cases though using a scoped Store for a very complex and nested component will increase performance of that component and make it easier to maintain, more predictable, and completely encapsulated.

*Create custom subscribe hooks* – A custom subscribe hook should be created when scoping a Store as the default useTreble hook always subscribes to the default app Store Context.

*3rd Party Libraries* – Scoped stores really shine when creating third party javascript libraries as it can be used even if the project does not make use of the library itself. TrebleGSM has a light footprint and will not add much overhead to your library.


