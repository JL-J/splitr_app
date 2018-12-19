import React from 'react';
import { Button, Text } from 'native-base';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SubmitButton from '../submitButton';

describe('<SubmitButton />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <SubmitButton />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders one text input component', () => {
    const wrapper = shallow(<SubmitButton />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

});
