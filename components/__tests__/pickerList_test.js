import React from 'react';
import { FlatList } from 'react-native';
import { Picker } from 'native-base';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PickerList from '../pickerList';

describe('<PickerList />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <PickerList />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders a flat list component', () => {
    const wrapper = shallow(<PickerList />);
    expect(wrapper.find(FlatList)).toHaveLength(1);
  });
});
