---
path: "/api/references/treble-gsm"
date: "2021-01-01"
title: "TrebleGSM"
subMenu: 
    - text: ''
      path: '#'
---

## API Reference
The API references below are methods that are built into the TrebleGSM library.

### `createStore`
This method is used to create a new TrebleGSM store.
```javascript
createStore(storeData, options);
```

### `createModule`
Method used to create a TrebleGSM module.
```javascript
createModule(moduleData);
```
### `withTreble`
A function that is used to create higher order components that connect to a TrebleGSM store. It is also used to connect Class Components to a TrebleGSM store.
```javascript
withTreble(Component, options);
```

### `useTreble`
A Hook that exposes the TrebleGSM store state and store dispatchers to the component it is initialized in.
```javascript
useTreble(context);
```

### `useScopedTreble`
Creates a new TrebleGSM context for scoping stores.
```javascript
useScopedTreble();
```
### `Treble`
Provider component that wraps around components and gives them access to the TrebleGSM store.
```jsx
<Treble store>{children}</Treble>
```
### `Provider`
A raw provider component that can be used to create custom `Treble` provider components.
```jsx
<Provider reducer initialState scope store modules>{children}</Provider>
```
