import taskReducer from '../reducers/taskReducer'
import configureStore from '../store';
import * as actions from '../actions/task';

describe('taskReducer', () => {
  it('should return the initial state', () => {
    expect(taskReducer(undefined, {})).toEqual(
      {
        tasks: []
      }
    );
  });

  it('adds tasks', () => {
    expect(taskReducer({
      tasks: []
    }, {
      type: 'ADD_TASK',
      payload: 'Buy beer'
    })).toEqual({
      tasks: [{'key': 0, 'value': 'Buy beer'}]
    });
  });

  it('adds multiple tasks', () => {
    expect(taskReducer({
      tasks: [{'key': 0, 'value': 'Buy beer'}]
    }, {
      type: 'ADD_TASK',
      payload: 'Buy snacks'
    })).toEqual({
      tasks: [
        {'key': 0, 'value': 'Buy beer'},
        {'key': 1, 'value': 'Buy snacks'}
      ]
    });
  });
});
