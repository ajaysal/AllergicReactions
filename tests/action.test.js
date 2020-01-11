import { addArItem } from '../src/js/actions';

describe('Testing actions', () => {
  let addMock = jest.fn();
  
  it('should fire an action', () => {
      let action = addArItem([])(addMock);
      expect(addMock).toHaveBeenCalled();
  });
  
});