import configureStore from 'redux-mock-store';
import { addTask } from '../../actions/task';
import { ADD_TASK } from '../../actions/types';

const expectedActions = {
	type: ADD_TASK,
	payload: 'Buy beer'
};

describe('addTask', () => {
	it('exports an action to add a task', () => {
		expect(addTask('Buy beer')).toEqual(expectedActions);
	});
});
