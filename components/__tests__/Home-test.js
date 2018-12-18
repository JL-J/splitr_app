import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddNames, { NameInput } from '../../screens/addNames';

describe('<AddNames />', function() {
  it('should render without throwing error', function() {
    const wrapper = shallow(<AddNames />);
    expect(wrapper.contains('Splitr')).toBe(true);
  });

  it('renders one name input component', function() {
    const wrapper = shallow((
      <NameInput
        nameHandler = { this.personNameChangeHandler }
      />
    ));
    expect(wrapper.contains([
      <NameInput />,
    ])).to.equal(true);
  });
});
