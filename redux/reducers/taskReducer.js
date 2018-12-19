import { ADD_TASK } from '../actions/types';

const initialState = {
  tasks: []
}

const taskReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TASK:
		return {
			...state,
			tasks: state.tasks.concat({
				key: state.tasks.length,
				value: action.payload
			})
		};
	default:
		return state;
	}
};


export default taskReducer;
