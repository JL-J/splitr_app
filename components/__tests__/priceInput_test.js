import React from 'react';
import { TextInput } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PriceInput from '../priceInput';

describe('<PriceInput />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <PriceInput />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders one text input component', () => {
    const wrapper = shallow(<PriceInput />);
    expect(wrapper.find(TextInput)).toHaveLength(1);
  });

});
