import { ADD_AR_ITEMS } from '../reducers/reactionsReducer';

const addArItemSuccess = item => ({
  type: ADD_AR_ITEMS,
  payload: item
});

export const addArItem = (item) => dispatch => {
  return dispatch(addArItemSuccess(item));
};