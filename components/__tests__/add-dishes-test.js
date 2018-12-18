import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddNames, { AddDishes, NameInput } from '../../screens/addDishes';

import renderer from 'react-test-renderer';

describe('<AddDishes />', () => {

  it('renders AddDishes page correctly', () => {
    const snap = renderer.create(
      <AddDishes />
      ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
