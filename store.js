import { createStore, combineReducers } from 'redux';
import nameReducer from './src/reducers/nameReducer';

const rootReducer = combineReducers({
  peopleNames: nameReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
