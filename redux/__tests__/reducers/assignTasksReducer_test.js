import assignTaskReducer from '../../reducers/assignTasksReducer';
import configureStore from '../../store';
import * as actions from '../../actions/assignTasks'

describe('assignTasksReducer', () => {
  it('should return the initial state', () => {
    expect(assignTaskReducer(undefined, {})).toEqual(
      {
      	assignTasks: {meh: '0'}
      }
    )
  })

  it('assigns tasks', () => {
    expect(assignTaskReducer({
      assignTasks: {meh: '0'}
    }, {
      type: 'ASSIGN_TASKS',
      payload: {
        hmm: '1'
      }
    })).toEqual({
      assignTasks: {
        hmm: '1'
      }
    })
  })
});
