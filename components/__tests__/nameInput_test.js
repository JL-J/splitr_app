import React from 'react';
import { TextInput } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NameInput from '../nameInput';

describe('<NameInput />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <NameInput />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders one text input component', () => {
    const wrapper = shallow(<NameInput />);
    expect(wrapper.find(TextInput)).toHaveLength(1);
  });

});
