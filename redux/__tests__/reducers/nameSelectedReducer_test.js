import nameSelectedReducer from '../../reducers/nameSelectedReducer';
import configureStore from '../../store';
import * as actions from '../../actions/nameSelected';

describe('nameReducer', () => {
	it('should return the initial state', () => {
		expect(nameSelectedReducer(undefined, {})).toEqual(
			{
      	nameSelected: {}
			}
		);
	});
});
