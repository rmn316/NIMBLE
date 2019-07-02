import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { KeywordItems } from './KeywordItems';
import { Alert } from 'reactstrap'

configure({adapter: new Adapter()});

describe ('<KeywordItems />', () => {
  let wrapper;
  beforeEach (() => {
    wrapper = shallow(<KeywordItems keywords={[]} onFetchKeywords={() => {}}/>);
  });

  it ('should render one <Alert /> element when know keywords exist', () => {
    wrapper.setProps({keywords: []})
    expect(wrapper.find(Alert)).toHaveLength(1);
  });
});
