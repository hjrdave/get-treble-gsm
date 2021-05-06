---
path: "/api/modules/api-reference"
date: "2021-01-01"
title: "Module API Reference"
subMenu: 
    - text: ''
      path: '#'
---

Below is a documentation for the TrebleGSM module api.

### `createModule`
The `createModule()` function is what is used to create TrebleGSM modules. It is an entry point for all module logic.
```javascript
const ModuleName = createModule({ /*module properties*/ });
```

#### Module Properties

### `name`
This is the name of the module. This should be the same name of the npm package if the module is published to the npm registry. This is a required property.
```Typescript
name: string
```
### `extendStore`
Add a module specific `Store`. This allows a the module to extend an apps TrebleGSM Store with its own state items.
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
```typescript
dispatchers?: { 
    [key: string]: (...params: any) => void 
}
```
### `reducerActions`
```typescript
reducerActions?: { [key: string]: (middlewareData: MiddlewareData) => any }
```

### `middleware`
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
```typescript
renderComponent?: React.ReactNode
```

### `importModules`
```typescript
importModules?: ModuleData[]
```



 

