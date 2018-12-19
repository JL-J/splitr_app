import { ADD_TRIP } from '../actions/types';

const initialState = {
  currentTrip: {},
  trips: []
}

const tripReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TRIP:
		return {
			...state,
			currentTrip: Object.assign({}, action.payload),
			trips: state.trips.concat({
				key: state.trips.length,
				value: action.payload
			})
		};
	default:
		return state;
	}
};

export default tripReducer;
