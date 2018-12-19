import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItem from '../listItem';

describe('<ListItem />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <ListItem />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders one text input component', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper.find(Text)).toHaveLength(1);
  });

});
