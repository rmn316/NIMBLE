import React from 'react';
import { configure, shallow } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { Login } from './Login'
import { Form } from 'reactstrap';

configure({adapter: new Adapter()});

describe ('<Login />', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallow(<Login />)
  });

  it ('should have the <Form /> initially displayed', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
