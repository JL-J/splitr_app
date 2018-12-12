import 'react-native';
import React from 'react';
import AddReceipt from '../addReceipt.js';

import renderer from 'react-test-renderer';

describe('<AddReceipt />', () => {

  it('renders AddReceipt page correctly', () => {
    const snap = renderer.create(
      <AddReceipt />
      ).toJSON();
    expect(snap).toMatchSnapshot();
  });

});
