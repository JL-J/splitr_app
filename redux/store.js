import { createStore, combineReducers } from 'redux';
import nameReducer from './reducers/nameReducer';
import dishReducer from './reducers/dishReducer';
import tripReducer from './reducers/tripReducer';

const rootReducer = combineReducers({
	peopleNames: nameReducer,
	dishes: dishReducer,
	trips: tripReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;
