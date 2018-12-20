import configureStore from 'redux-mock-store';
import { assignTasks } from '../../actions/assignTasks';
import { ASSIGN_TASKS } from '../../actions/types';

const expectedActions = {
	type: ASSIGN_TASKS,
	payload: 'Buy beer'
};

describe('addName', () => {
	it('exports an action to add a name', () => {
		expect(assignTasks('Buy beer')).toEqual(expectedActions);
	});
});
