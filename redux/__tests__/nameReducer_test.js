import nameReducer from '../reducers/nameReducer'
import configureStore from '../store';
import * as actions from '../actions/name';

describe('nameReducer', () => {
  it('should return the initial state', () => {
    expect(nameReducer(undefined, {})).toEqual(
      {
      	personName: '',
      	peopleNames: []
      }
    );
  });
});
