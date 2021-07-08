---
path: "/api/references/treble-core"
date: "2021-01-01"
title: "Treble Core"
subMenu: 
    - text: ''
      path: '#'
---

## API Reference
Treble Core is a module that ships with the TrebleGSM library. It adds some handy dispatcher methods and adds some middleware to help with optimization.

### Dispatchers
These Dispatchers are built into the Treble Core module and are accessible by the `useTreble` hook.
```javascript
const [,Store] = useTreble();
```

### `Store.update`
This is the most commonly used dispatcher for TrebleGSM. It updates the current state with the dispatched value.
```javascript
Store.update(actionKey, dispatchValue, options)
```

### `Store.toggle`
Toggles a Store state from from `true` to `false` and vice versa.
```javascript
Store.toggle(actionKey, options)
```

### `Store.reset`
Selects a certain Store state and resets it to its initial value.
```javascript
Store.reset(actionKey, options)
```

### `Store.resetAll`
Resets all Store state to their initial values.
```javascript
Store.resetAll();
```

### `Store.run`
Targets a Store state objects `run` middleware. Basically you can fire Store middleware from anywhere in the application.
```javascript
Store.run(actionKey, options);
```

### Utilties

### `reducerActionKeys`
Can be used by custom modules to target Treble Core reducer actions.

```typescript
reducerActionKeys = {
    update: string;
    toggle: string;
    run: string;
    reset: string;
    resetAll: string;
}
```