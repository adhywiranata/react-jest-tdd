# React Jest TDD (feat Airbnb's Enzyme)
> Simple experimental app to implement Testing in React using Jest

## Installing 🔧
``
npm install --save enzyme jsdom react-addons-test-utils react-test-renderer
``

## Running Tests 🏃
``
npm test
``

this will execute a test npm script. Please check package.json file to inspect it.

## Step by Step Implementation 📖
For better learning experience, we'll try covering some type of tests one by one:

### Unit Tests

#### Just React 👷
- [01 - Default Create React App Testing](https://github.com/adhywiranata/react-jest-tdd/tree/01-cra-default), just to show you how to start!
- [02 - Test App's Output](https://github.com/adhywiranata/react-jest-tdd/tree/02-output-test), to make sure you're rendering components correctly.
- [03 - Test Component States](https://github.com/adhywiranata/react-jest-tdd/tree/03-state-test), to make sure you have the right states.
- [04 - Test Events](https://github.com/adhywiranata/react-jest-tdd/tree/04-events-test), to make sure events can be successfully fired/invoked during component interactions.
- [05 - Test Props](https://github.com/adhywiranata/react-jest-tdd/tree/05-props-test), to make sure props are properly send to child components.

#### + Redux! 😍
- [06 - Test Action Creators](https://github.com/adhywiranata/react-jest-tdd/tree/06-action-creators-test), to make sure we have created a proper action which is a plain object.
- [07 - Test Reducers](https://github.com/adhywiranata/react-jest-tdd/tree/07-reducers-test), to make sure we our reducer returns a new state as we expected.
- [08 - Test Store](https://github.com/adhywiranata/react-jest-tdd/tree/08-store-test), to make sure our Store do things we expect it to.
- [09 - Test Connected Components](https://github.com/adhywiranata/react-jest-tdd/tree/09-connected-components-test), to finally test our redux-connected components!

#### Snapshot Test ? 📷
- **[10 - Snapshot Test](https://github.com/adhywiranata/react-jest-tdd/tree/10-snapshot-test), to make sure nothing changed** 😎
