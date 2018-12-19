import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListTask from '../listTask';

describe('<ListTask />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <ListTask />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders two name input component', () => {
    const wrapper = shallow(<ListTask />);
    expect(wrapper.find(Text)).toHaveLength(2);
  });

});
