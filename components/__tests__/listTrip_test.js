import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListTrip from '../listTrip';

describe('<ListTrip />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <ListTrip />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders four text input components', () => {
    const wrapper = shallow(<ListTrip />);
    expect(wrapper.find(Text)).toHaveLength(4);
  });

});
