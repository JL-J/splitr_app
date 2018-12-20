import { SELECT_NAME_TO_TASK } from './types';
// CHANGED DISH TO TASK HERE AND IN '../reducers/nameSelectedReducer'
export const nameSelected = (nameId, taskId) => {
	return {
		type: SELECT_NAME_TO_TASK,
		payload: { nameId, taskId }
	};
};
