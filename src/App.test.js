import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

describe('<App> component ', () => {
  it('renders correctly', () => {
    const appWrapper = shallow(<App />);
    // by having 1 length, it means <App /> component has rendered 1 time.
    expect(appWrapper).toHaveLength(1);
  });
});
