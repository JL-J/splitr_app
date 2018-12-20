import nameSelectedReducer from '../../reducers/nameSelectedReducer'
import configureStore from '../../store';
import * as actions from '../../actions/nameSelected';

describe('nameReducer', () => {
  it('should return the initial state', () => {
    expect(nameSelectedReducer(undefined, {})).toEqual(
      {
      	nameSelected: {}
      }
    );
  });

  it('assign names to tasks', () => {
    expect(nameSelectedReducer({
      nameSelected: {}
    }, {
      type: 'SELECT_NAME_TO_TASK',
      payload: {
        nameId: 0,
        taskId: 0
      }
    })).toEqual({
      nameSelected: {
        "0": 0
      }
    })
  })
});
