import { SELECT_NAME_TO_DISH } from '../actions/types';

const initialState = {
  nameSelected: {}
}

const nameSelectedReducer = (state = initialState, action) => {
	switch(action.type) {
		case SELECT_NAME_TO_DISH:
		return {
			...state,
			nameSelected: Object.assign({}, state.nameSelected, {
				key: action.payload.dishId,
				value: action.payload.nameId
			})
		};
	default:
		return state;
	}
};


export default nameSelectedReducer;
