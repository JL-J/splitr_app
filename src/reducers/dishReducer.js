import { ADD_DISH } from '../actions/types';

const initialState = {
  dishName: '',
  dishPrice: '',
  dish: {},
  dishes: []
}

const dishReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_DISH:
		return {
			...state,
			dishes: state.dishes.concat({
				key: Math.random(),
				value: action.payload
			})
		};
	default:
		return state;
	}
};


export default dishReducer;
