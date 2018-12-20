import { ASSIGN_TASKS } from './types';

export const assignTasks = data => {
	return {
		type: ASSIGN_TASKS,
		payload: data
	};
};