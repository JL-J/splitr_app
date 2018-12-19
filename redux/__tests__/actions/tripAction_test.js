import configureStore from 'redux-mock-store';
import { addTrip } from '../../actions/trip';
import { ADD_TRIP } from '../../actions/types';

const expectedActions = {
  type: ADD_TRIP,
  payload: 'Spain'
}

describe('addTrip', () => {
  it('exports an action to add a trip', () => {
    expect(addTrip('Spain')).toEqual(expectedActions);
  });
});
