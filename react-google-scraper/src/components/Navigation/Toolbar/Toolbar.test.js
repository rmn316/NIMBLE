import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toolbar from './Toolbar';
import { NavbarBrand } from 'reactstrap'
import NavigationItems from '../NavigationItems/NavigationItems';

configure({adapter: new Adapter()});

describe ('<Toolbar />', () => {
  let wrapper;
  beforeEach (() => {
    wrapper = shallow(<Toolbar />);
  });

  it ('should render one <NavigationItems />', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it ('should render one <NavbarBrand /> element', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.find(NavbarBrand)).toHaveLength(1);
  });
});