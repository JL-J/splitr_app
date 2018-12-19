import { ASSIGN_TASKS } from '../actions/types';

const initialState = {
	assignTasks: {meh: '0'}
}

const assignTaskReducer = (state = initialState, action) => {
	switch(action.type) {
		case ASSIGN_TASKS:
		return {
			...state,
			assignTasks: action.payload
		};
	default:
		return state;
	}
};


export default assignTaskReducer;
