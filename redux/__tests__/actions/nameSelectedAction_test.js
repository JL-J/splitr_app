import configureStore from 'redux-mock-store';
import { nameSelected } from '../../actions/nameSelected';
import { SELECT_NAME_TO_TASK } from '../../actions/types';

const expectedActions = {
  type: SELECT_NAME_TO_TASK,
  payload: ['Bill', 'Bring beer']
}

describe('nameSelected', () => {
  it('exports an action to add a name with a task', () => {
    expect(nameSelected('Bill', 'Bring beer')).toEqual({
      type: SELECT_NAME_TO_TASK,
      payload: {
        "nameId": "Bill",
        "taskId": "Bring beer"
      }
    });
  });
});
