import nameReducer from '../../reducers/nameReducer';
import configureStore from '../../store';
import * as actions from '../../actions/name';

describe('nameReducer', () => {
  it('should return the initial state', () => {
    expect(nameReducer(undefined, {})).toEqual(
      {
      	peopleNames: []
      }
    );
  });

  it('adds names', () => {
    expect(nameReducer({
      peopleNames: []
    }, {
      type: 'ADD_NAME',
      payload: 'Bill'
    })).toEqual({
      peopleNames: [{'key': 0, 'value': 'Bill'}]
    });
  });

  it('can add multiple names', () => {
    expect(nameReducer({
      peopleNames: [{'key': 0, 'value': 'Bill'}]
    }, {
      type: 'ADD_NAME',
      payload: 'Jude'
    })).toEqual({
      peopleNames: [
        {'key': 0, 'value': 'Bill'},
        {'key': 1, 'value': 'Jude'},
      ]
    });
  });
});
