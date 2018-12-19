import tripReducer from '../reducers/tripReducer'
import configureStore from '../store';
import * as actions from '../actions/trip';

describe('tripReducer', () => {
  it('should return the initial state', () => {
    expect(tripReducer(undefined, {})).toEqual(
      {
        currentTrip: {},
        trips: []
      }
    );
  });
});
