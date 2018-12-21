import React from 'react';
import { Button, Text } from 'native-base';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NavigationButton from '../navigationButton';

describe('<NavigationButton />', function() {
  it('renders the component correctly', () => {
    const snap = renderer.create(
      <NavigationButton />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders a flat list component', () => {
    const wrapper = shallow(<NavigationButton />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
