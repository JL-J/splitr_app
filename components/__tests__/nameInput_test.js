import React from 'react';
import { TextInput } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Input from '../input';

describe('<NameInput />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <Input />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders one text input component', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find(TextInput)).toHaveLength(1);
  });

});
