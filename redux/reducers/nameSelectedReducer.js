import { SELECT_NAME_TO_TASK } from '../actions/types';

const initialState = {
  nameSelected: {}
}

const nameSelectedReducer = (state = initialState, action) => {
	switch(action.type) {
		case SELECT_NAME_TO_TASK: // CHANGED DISH TO TASK HERE
		return {
			...state,
			nameSelected: Object.assign({}, state.nameSelected, {
				[action.payload.taskId]: action.payload.nameId
			})
		};
	default:
		return state;
	}
};


export default nameSelectedReducer;
