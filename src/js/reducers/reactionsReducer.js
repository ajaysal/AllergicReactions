export const ADD_AR_ITEMS = 'SET_AR_ITEMS';

const initialState = {
  arItems:  [
    {"id": 1, "description": "Strawberries", "observationDate" : "2018-01-01", "severity": 10},
    {"id": 1, "description": "Strawberries", "observationDate" : "2012-09-23", "severity": 8},
    {"id": 3, "description": "Peanuts", "observationDate" : "1990-01-01", "severity": 9},
    {"id": 2, "description": "Bee Sting", "observationDate" : "1999-04-01", "severity": 5},
    {"id": 4, "description": "Seafood", "observationDate" : "1992-03-04", "severity": 7},
    {"id": 3, "description": "Peanuts", "observationDate" : "2001-04-06", "severity": 2},
    {"id": 4, "description": "Seafood", "observationDate" : "2013-02-04", "severity": 8},
    {"id": 3, "description": "Peanuts", "observationDate" : "2018-04-05", "severity": 2},
    {"id": 1, "description": "Strawberries", "observationDate" : "2019-06-27", "severity": 1}
  ]
};

function reactionsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AR_ITEMS:
      return { 
        ...state, 
        arItems: [ ...state.arItems , action.payload ] 
      };
    default:
      return state
  }
}

export default reactionsReducer;