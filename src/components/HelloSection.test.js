import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import { HelloSection } from './HelloSection';
import ConnectedHelloSection from './HelloSection';
import store from '../store/configureStore';

describe('<HelloSection> component ', () => {
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

  it('renders zero <li>s inside <ul>', () => {
    const helloSectionUl = helloSectionWrapper.find('ul');
    const LiInsidehelloSectionUl = helloSectionUl.find('li');
    expect(LiInsidehelloSectionUl).toHaveLength(0);
  });
});

describe('<ConnectedHelloSection> redux-connected component  ', () => {
  it('renders correctly', () => {
    const ConnectedHelloSectionWrapper = shallow(
      <Provider store={store}>
        <ConnectedHelloSection />
      </Provider>);
    expect(ConnectedHelloSectionWrapper).toHaveLength(1);
  });
});
