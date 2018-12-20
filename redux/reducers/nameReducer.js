import { ADD_NAME } from '../actions/types';

const initialState = {
	peopleNames: []
};

const nameReducer = (state = initialState, action) => {
	switch(action.type) {
	case ADD_NAME:
		return {
			...state,
			peopleNames: state.peopleNames.concat({
				key: state.peopleNames.length,
				value: action.payload
			})
		};
	default:
		return state;
	}
};

export default nameReducer;
