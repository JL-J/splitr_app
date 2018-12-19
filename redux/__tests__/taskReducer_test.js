import taskReducer from '../reducers/taskReducer'
import configureStore from '../store';
import * as actions from '../actions/task';

describe('taskReducer', () => {
  it('should return the initial state', () => {
    expect(taskReducer(undefined, {})).toEqual(
      {
        taskName: '',
        taskPrice: '',
        task: {},
        tasks: []
      }
    );
  });
});
