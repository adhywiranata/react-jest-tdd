import React from 'react';
import { shallow } from 'enzyme';

import HelloSection from './HelloSection';

describe('<HelloSection> component ', () => {
  /*
  ============
  OUTPUT TESTS
  ============
  */
  const helloSectionWrapper = shallow(<HelloSection />);
  it('renders correctly', () => {
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
  /*
  ============
  STATE TESTS
  ============
  */
  it('have todos state which consists of three items', () => {
    const todosState = helloSectionWrapper.state('todos');
    expect(todosState).toHaveLength(3);
  });
});
