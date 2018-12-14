import { createStore, combineReducers } from 'redux';
import nameReducer from './src/reducers/nameReducer';
import dishReducer from './src/reducers/dishReducer';

const rootReducer = combineReducers({
	peopleNames: nameReducer,
	dishes: dishReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;
