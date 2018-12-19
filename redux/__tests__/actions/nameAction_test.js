import configureStore from 'redux-mock-store';
import addName from '../../actions/name';

describe('addName', () => {
  it('creates an action to add a name', () => {
    expect(addName('Bill')).toEqual({
      type: 'ADD_NAME',
      payload: 'Bill'
    });
  });
});
