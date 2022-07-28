export const reducer = (state, action) => {
  switch (action.type) {
    case 'counterAdd':
      console.log('add reducer', state);
      return { ...state, ...{ count: state.count + action.number } };
    case 'counterSub':
      console.log('sub reducer', state);
      return { ...state, ...{ count: state.count - action.number } };
    default:
      return state;
  }
};
