import React from 'react';
import { shallow } from 'enzyme';

import HelloSection from './HelloSection';

describe('<HelloSection> component ', () => {
  it('renders correctly', () => {
    const helloSectionWrapper = shallow(<HelloSection />);
    // by having 1 length, it means <HelloSection /> component has rendered 1 time.
    expect(helloSectionWrapper).toHaveLength(1);
  });
});
