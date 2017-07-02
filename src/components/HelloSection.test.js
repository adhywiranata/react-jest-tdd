import React from 'react';
import { shallow } from 'enzyme';

import HelloSection from './HelloSection';

describe('<HelloSection> component ', () => {
  const helloSectionWrapper = shallow(<HelloSection />);
  it('renders correctly', () => {
    // by having 1 length, it means <HelloSection /> component has rendered 1 time.
    expect(helloSectionWrapper).toHaveLength(1);
  });

  it('renders a <h1>', () => {
    const helloSectionH1 = helloSectionWrapper.find('h1');
    expect(helloSectionH1).toHaveLength(1);
  });

  it('renders a paragraph <p>', () => {
    const helloSectionParagraph = helloSectionWrapper.find('p');
    expect(helloSectionParagraph).toHaveLength(1);
  });

  it('renders an <ul>', () => {
    const helloSectionUl = helloSectionWrapper.find('ul');
    expect(helloSectionUl).toHaveLength(1);
  });

  it('renders three <li>s inside <ul>', () => {
    const helloSectionUl = helloSectionWrapper.find('ul');
    const LiInsidehelloSectionUl = helloSectionUl.find('li');
    expect(LiInsidehelloSectionUl).toHaveLength(3);
  });
});
