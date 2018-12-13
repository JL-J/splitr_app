import { ADD_NAME } from '../actions/types';

const initialState = {
	personName: '',
	peopleNames: []
};

const nameReducer = (state = initialState, action) => {
	switch(action.type) {
	case ADD_NAME:
		return {
			...state,
			peopleNames: state.peopleNames.concat({
				key: Math.random(),
				value: action.payload
			})
		};
	default:
		return state;
	}
};

export default nameReducer;
