import { ADD_TASK } from './types';

export const addTask = task => {
	return {
		type: ADD_TASK,
		payload: task
	};
};
