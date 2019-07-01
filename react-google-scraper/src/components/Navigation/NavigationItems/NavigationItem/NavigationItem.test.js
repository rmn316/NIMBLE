import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from './NavigationItem';
import { NavItem } from 'reactstrap';

configure({adapter: new Adapter()});

describe ('<NavigationItem />', () => {
  let wrapper;
  beforeEach (() => {
    wrapper = shallow(<NavigationItem />);
  });

  it ('should render one nav item element', () => {
    expect(wrapper.find(NavItem)).toHaveLength(1);
  });
});