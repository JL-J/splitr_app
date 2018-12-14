import { createStore, combineReducers } from 'redux';
import nameReducer from './reducers/nameReducer';
import dishReducer from './reducers/dishReducer';

const rootReducer = combineReducers({
	peopleNames: nameReducer,
	dishes: dishReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;
