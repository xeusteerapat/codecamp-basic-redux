let initialState = {
  count: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    case 'ADD_FIVE':
      return {
        ...state,
        count: state.count + 5
      };
    case 'SUB_FIVE':
      return {
        ...state,
        count: state.count - 5
      };
    case 'RESET':
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};
