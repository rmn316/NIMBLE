import React from 'react';
import { configure, shallow } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { Logout } from './Logout'
import { Redirect } from 'react-router-dom';

configure({adapter: new Adapter()});

describe ('<Logout />', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallow(<Logout onLogout={() => {}} />)
  });

  it ('should have the redirect to logout a user', () => {
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
