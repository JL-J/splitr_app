import { createStore, combineReducers } from 'redux';
import nameReducer from './reducers/nameReducer';
import taskReducer from './reducers/taskReducer';
import tripReducer from './reducers/tripReducer';
import nameSelectedReducer from './reducers/nameSelectedReducer';

const rootReducer = combineReducers({
	peopleNames: nameReducer,
	tasks: taskReducer,
	trips: tripReducer,
	nameSelected: nameSelectedReducer
});

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;
