import { createStore, combineReducers } from 'redux';
import nameReducer from './reducers/nameReducer';
import dishReducer from './reducers/dishReducer';
import tripReducer from './reducers/tripReducer';
import nameSelectedReducer from './reducers/nameSelectedReducer';

const rootReducer = combineReducers({
	peopleNames: nameReducer,
	dishes: dishReducer,
	trips: tripReducer,
	nameSelected: nameSelectedReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;
