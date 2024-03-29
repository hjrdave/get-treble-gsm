---
path: "/api/modules/api-reference"
date: "2021-01-01"
title: "Module API Reference"
subMenu: 
    - text: ''
      path: '#'
---

Below is documentation for the TrebleGSM module api.

### `createModule`
The `createModule()` function is what is used to create TrebleGSM modules. It is an entry point for all module logic.
```javascript
const ModuleName = createModule({ /*module properties*/ });
```

#### Module Properties

`name`  
This is the name of the module. This should be the same name of the npm package if the module is published to the npm registry. This is a required property.
```Typescript
name: string
```
### `extendStore`
Add a module specific `Store`. This allows the module to extend an app's TrebleGSM Store with its own state items.
```Typescript
extendStore?: {
  data: StoreItem[],
  options?: StoreOptions
}
```
### `featureKeys`
Add state item feature keys. This allows the module to be aware of module specific feature properties.
```typescript
featureKeys?: string[]
```
### `dispatchers`
Allows for module specific dispatcher methods.
```typescript
dispatchers?: { 
    [key: string]: (...params: any) => void 
}
```
### `reducerActions`
Creates reducer actions to pair with module dispatchers.
```typescript
reducerActions?: { [key: string]: (middlewareData: MiddlewareData) => any }
```

### `middleware`
Adds module specific middleware to each Store item.
```typescript
middleware: {
  log: (moduleData) => void,
  run: (moduleData) => void,
  check: (moduleData) => boolean,
  process: (moduleData) => any,
  callback: (moduleData) => void,
  payloadListener: () => void
}
```
### `renderComponent`
Allows module specific components to be rendered at the top layer of the TrebleGSM Provider.
```typescript
renderComponent?: React.ReactNode
```

### `importModules`
Other 3rd party modules may be imported into a module.
```typescript
importModules?: ModuleData[]
```



 

