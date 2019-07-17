# Food-truck-finder
CLI utility to get the list of available food trucks from public API

Utility is build on top of Model View Intent(MVI) pattern. User interaction with the UI is processed by business logic which brings change in the state. This new state is rendered on view and this newly updated view is shown to the user.
This pattern forces a Unidirectional and Circular Data Flow.

## Modules

### View [cli.js](./src/cli.js)
- Emits user action.
- Observes the state change.
- Renders the UI with updated changes.

### Business Logic Layer [sagas.js](./src/store/sagas.js) 
- Does asynchronous call to external services (APIs).
- Gives the result to Reducer.

### State Management
- Reducer: Takes both the previous and the current state as parameters and returns a new state. For each action, the reducer returns a new copy of the immutable state.

### Services [api.js](./src/services/api.js)
- Defines low level logic to perform API call

## Getting started

### Install dependencies
```
yarn install
```

### Usage
```
./bin/food-truck-finder
```
