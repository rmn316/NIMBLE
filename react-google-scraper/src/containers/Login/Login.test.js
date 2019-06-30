import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from './Login'
import { Button } from 'reactstrap';

configure({adapter: new Adapter()});

describe ('<Login />', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallow(<Login />)
  });

  it ('should have the submit button disabled initially', () => {
    wrapper.setProps({canSubmit: true});
    expect(wrapper.find(Button)).attr('disabled').toEqual(true);
  });
})