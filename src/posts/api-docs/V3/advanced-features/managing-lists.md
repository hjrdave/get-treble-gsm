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
```javascript
npm install treble-list-manager
```
### Import the module into your Store.

After the Treble List Manager module is installed and imported into your Store you will have access to a number of Dispatcher methods and Store features that will help you manage lists with ease.
```javascript
import {TrebleListManager} from 'treble-gsm';

const Store = createStore([],{ modules: [ TrebleListManager ] });
```

### Static Keys
In order for React to manage lists, each list item needs a static key. TrebleGSM assigns static keys to array objects by default. The static key method is called trebleKey. This method is used by Dispatchers to handle different types of CRUD operations. To turn this feature off you can set the state item's `feature` property `keys` to `false`. This is `true` by default.
```javascript
features: { keys: false }
```

### API Reference
All Treble List Manager Store methods must target a state item that is an array.
### `Store.append`
Takes the current state array and appends another state item.
```javascript
Store.append(action: string, dispatchValue: any);
```
```javascript
Store.append('updateTrainerList', { name: 'Gary Oak', personality: 'Jerk'});
```
### `Store.prepend`
Takes the current state array and prepends another state item.
```javascript
Store.prepend(action: string, dispatchValue: any);
```
```javascript
Store.prepend('updateTrainerList', { name: 'Brock', personality: 'Creeper'});
```

### `Store.remove`
The dispatched value is compared to current list items and if a match is found it is removed from the list.
```javascript
Store.remove(action: string, targetValue: any);
```
```javascript
Store.remove('updateTrainerList', { name: 'Brock', personality: 'Creeper'});
```
<!-- ### Store.edit
TBA -->

### `Store.orderBy` 
Sorts a state item list in *ascending* or *descending* order. Targets a specified property to sort by.
```javascript
Store.orderBy(action: string, targetProperty: string, 'asc' | 'desc');
``` 
```javascript
Store.orderBy('updateTrainerList', 'name', 'asc');
``` 

>The `orderBy` is smart enough to sort in numerical order if the sort targets a property with integers.


### `Store.removeBatch`
The removeBatch method is similar to remove but it takes an array of objects that TrebleGSM will find and remove from the list.
```javascript
Store.removeBatch(action: string, [...targetValues]);
```
```javascript
Store.removeBatch('updateTrainerList', [
    { name: 'Gary Oak', personality: 'Jerk'}, 
    { name: 'Brock', personality: 'Creeper'}
]);
```
