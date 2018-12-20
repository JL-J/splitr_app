import configureStore from 'redux-mock-store';
import { addName } from '../../actions/name';
import { ADD_NAME } from '../../actions/types';

const expectedActions = {
	type: ADD_NAME,
	payload: 'Bill'
};

describe('addName', () => {
	it('exports an action to add a name', () => {
		expect(addName('Bill')).toEqual(expectedActions);
	});
});
