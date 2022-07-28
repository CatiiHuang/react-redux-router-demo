export function add(number = 1) {
  console.log('add action');
  return {
    type: 'counterAdd',
    number,
  };
}

export function sub(number = 1) {
  console.log('sub action');
  return {
    type: 'counterSub',
    number,
  };
}

export const asyncAdd =
  (number = 1) =>
  (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'counterAdd',
        number,
      });
    }, 500);
  };

export const asyncSub =
  (number = 1) =>
  (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'counterSub',
        number,
      });
    }, 500);
  };
