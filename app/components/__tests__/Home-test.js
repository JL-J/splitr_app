// __tests__/Home.js
import 'react-native';
import React from 'react';
import Home from '../home.js';

import renderer from 'react-test-renderer';

it('home renders correctly', () => {
  const snap = renderer.create(
    <Home />
    ).toJSON();
  expect(snap).toMatchSnapshot();
});
