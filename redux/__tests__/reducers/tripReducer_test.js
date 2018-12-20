import tripReducer from '../../reducers/tripReducer'
import configureStore from '../../store';
import * as actions from '../../actions/trip';

describe('tripReducer', () => {
  it('returns initial state', () => {
    expect(tripReducer(undefined, {})).toEqual({
      currentTrip: {},
      trips: []
    });
  });

  it('adds trips', () => {
    expect(tripReducer({
      currentTrip: {},
      trips: []
    }, {
      type: 'ADD_TRIP',
      payload: ['Spain 2019']
    })).toEqual({
      currentTrip: {
        "0": "Spain 2019"
      },
      trips: [{
        'key': 0,
        'value': ['Spain 2019']
      }]
    });
  });

  it('adds multiple trips', () => {
    expect(tripReducer({
      currentTrip: {},
      trips: ['Spain 2019']
    }, {
      type: 'ADD_TRIP',
      payload: ['Ski trip']
    })).toEqual({
      currentTrip: {
        "0": "Ski trip"
      },
      trips: [
        'Spain 2019', {
          'key': 1,
          'value': ['Ski trip']
        }
      ]
    });
  });
});
