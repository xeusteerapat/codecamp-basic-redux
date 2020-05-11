import redux from 'redux';

let initialState = {
  count: 2
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        count: state.count + 1
      };
    case 'TIMES_FIVE':
      return {
        ...state,
        count: state.count * action.value
      };
    default:
      return state;
  }
};

// Store
const store = redux.createStore(rootReducer);

console.log(store.getState());

// Action
store.dispatch({
  type: 'ADD_COUNTER'
});

console.log('add 1', store.getState());

store.dispatch({
  type: 'TIMES_FIVE',
  value: 5
});

console.log('times five', store.getState());
