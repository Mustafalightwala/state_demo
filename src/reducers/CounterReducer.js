const INITIAL_STATE = {
  count: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    default:
      return state;
  }
};
