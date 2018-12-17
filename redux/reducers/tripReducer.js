import { ADD_TRIP } from '../actions/types';

const initialState = {
  tripName: '',
	tripLocation: '',
	tripDate: '',
  currentTrip: {},
  trips: []
}

const tripReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TRIP:
		return {
			...state,
			trips: state.trips.concat({
				key: Math.random(),
				value: action.payload
			})
		};
	default:
		return state;
	}
};


export default tripReducer;
