import { ADD_NAME } from './types';

export const addName = personName => {
  return {
    type: ADD_NAME,
    payload: personName
  }
}
