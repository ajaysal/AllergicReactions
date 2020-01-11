import reactionsReducer from '../src/js/reducers/reactionsReducer';
import rootReducer from '../src/js/reducers';

describe('Testing Reducers', () => {

  it('should return a initialdata default action', () => {
  	let result = reactionsReducer(undefined, {  });
    expect(result.arItems.length).toEqual(9);
  });
  
  it('should update table list when an action is fired', () => {
  	let newItem = {"id": 14, "description": "Apple", "observationDate" : "2019-06-27", "severity": 1};
    let result = reactionsReducer(undefined, { type: 'SET_AR_ITEMS', payload: newItem });
    expect(result.arItems.length).toEqual(10);
  });
  
});