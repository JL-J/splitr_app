import React from 'react';
import {
  shallow,
  mount,
  render
} from 'enzyme';
import Home from '../../screens/home';
import 'jsdom-global/register';

describe('<Home />', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    wrapper = shallow(<Home />);
    defaultProps = {
      tripName: 'Spain 2019',
      tripLocation: 'Barcelona'
    };
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a title', () => {
    const inputComponent = mount(
      <Title>{ defaultProps.tripName },
      { defaultProps.tripLocation }</Title>
    );
    expect(inputComponent.prop('tripName')).toEqual('Spain 2019');
  });
});
