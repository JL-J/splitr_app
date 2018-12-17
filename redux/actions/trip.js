import { ADD_TRIP } from './types';

export const addTrip = trip => {
	return {
		type: ADD_TRIP,
		payload: trip
	};
};