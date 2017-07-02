# React Jest TDD (feat Airbnb's Enzyme)
> Simple experimental app to implement Testing in React using Jest

## Installing 🔧
``
npm install --save enzyme jsdom react-addons-test-utils
``

## Step by Step Implementation 📖
For better learning experience, we'll try covering some type of tests one by one:

### Unit Tests

#### Just React 👷
- [01 - Default Create React App Testing](), just to show you how to start!
- [02 - Test App's Output](), to make sure you're rendering components correctly.
- [03 - Test Component States](), to make sure you have the right states.
- [04 - Test Events](), to make sure events can be successfully fired/invoked during component interactions.
- [05 - Test Props](), to make sure props are properly send to child components.

#### + Redux! 😍
- [06 - Test Action Creators](), to make sure we have created a proper action which is a plain object (let's not think of thunk for now 😈)
- [07 - Test Reducers](), to make sure we our reducer returns a new state as we expected.
- [08 - Test Store](), to make sure our Store do things we expect it to.
- [09 - Test Connected Components](), to finally test our redux-connected components!

#### Snapshot Test ? 📷
- [10 - Snapshot Test](), to make sure nothing changed 😎
