import configureStore, { rootReducer } from '../store'
import { createStore, combineReducers } from 'redux';
import nameReducer from '../reducers/nameReducer';
import taskReducer from '../reducers/taskReducer';
import tripReducer from '../reducers/tripReducer';
import nameSelectedReducer from '../reducers/nameSelectedReducer';

const store = combineReducers({
	peopleNames: nameReducer,
	tasks: taskReducer,
	trips: tripReducer,
	nameSelected: nameSelectedReducer
});

describe('store', () => {
  it('configures', () => {
    expect(configureStore()).toEqual(createStore(store))
  });
});
