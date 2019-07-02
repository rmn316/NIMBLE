import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert, Form } from 'reactstrap'
import Uploader from './Uploader';

configure({adapter: new Adapter()});

describe ('<Uploader />', () => {
  let wrapper;
  beforeEach (() => {
    wrapper = shallow(<Uploader />);
  });

  it ('should render one <Form />', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it ('should render a <Alert /> after upload', () => {
    wrapper.setProps({displayMessage: 'some message', error: false});
    expect(wrapper.find(Alert)).toHaveLength(1);
  });
});
