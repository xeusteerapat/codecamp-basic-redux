let initialState = {
  results: []
};

export const resultsReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          number: action.number
        })
      };
    default:
      console.log(state);
      return state;
  }
};
