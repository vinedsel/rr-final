const initialState = {
  count: 0,
  timesClicked: 0,
  numberInputted: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        timesClicked: state.timesClicked + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        timesClicked: state.timesClicked + 1
      };
    case 'TIMESCLICKED':
      return {
        ...state,
        count: (state.count = 0)
      };
    case 'ONINPUTNUMBERCHANGE':
      return {
        ...state,
        count: (state.count = )
        }
    default:
      return state;
  }
}

export default counterReducer;
