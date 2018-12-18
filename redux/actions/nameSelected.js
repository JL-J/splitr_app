import { SELECT_NAME_TO_DISH } from './types';

export const nameSelected = (nameId, dishId) => {
	return {
		type: SELECT_NAME_TO_DISH,
		payload: { nameId, dishId }
	};
};