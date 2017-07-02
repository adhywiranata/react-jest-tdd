import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

describe('<App> component ', () => {
  const appWrapper = shallow(<App />);
  /*
  ============
  OUTPUT TESTS
  ============
  */

  it('renders correctly', () => {
    expect(appWrapper).toHaveLength(1);
  });

  /*
  ============
  STATE TESTS
  ============
  */

  it('have title state', () => {
    const titleState = appWrapper.state('title');
    expect(titleState).toBeDefined();
  });

  it('have title state as a string', () => {
    const titleState = appWrapper.state('title');
    const isAString = typeof titleState === 'string';
    expect(isAString).toBeTruthy();
  });

});
