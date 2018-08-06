/**
 * Reducer stays pue, never do inside a reducer:
 * - mutate its arguments
 * - perform side effects like API calls and routing transitions
 * - call none-pure function , e.g. : Date.now(), Math.random, Buffer(),...
 */

import constant from '../constants/booking';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case constant.get:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case constant.set:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        data: action.data,
      });

    case constant.error:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
