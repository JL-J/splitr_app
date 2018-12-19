import nameReducer from '../../redux/reducers/nameReducer'
import configureStore from '../../redux/store';
import * as actions from '../../redux/actions/name';

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
