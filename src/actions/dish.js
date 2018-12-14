import { ADD_DISH } from './types';

export const addDish = dish => {
	return {
		type: ADD_DISH,
		payload: dish
	};
};