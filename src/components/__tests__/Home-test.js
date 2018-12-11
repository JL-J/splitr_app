// __tests__/Home.js
import 'react-native';
import React from 'react';
import Home from '../home.js';
import SubmitButton from '../submitButton.js'

import renderer from 'react-test-renderer';

describe('<Home />', () => {
  it('home renders correctly', () => {
    const snap = renderer.create(
      <Home />
      ).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('home renders a button', () => {
    const snap = renderer.create(
      <SubmitButton />
      ).toJSON();
    expect(snap).toMatchSnapshot();
  });

});
