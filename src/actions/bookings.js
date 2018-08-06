// bookings
//
// Action creators can also be asynchronous and have side-effects, handle API responses and compose action creators into async control flow.

import constant from 'constants/booking';
import * as bookingsApi from 'api/bookings';

const booking = {
  get() {
    return {
      type: constant.get,
    };
  },

  set(data) {
    return {
      data,
      type: constant.set,
    };
  },

  error(data) {
    return {
      error: data,
      type: constant.error,
    };
  },
};

const callbacks = {
  error(data, dispatch) {
    dispatch(booking.error(data));
  },

  get(dispatch) {
    dispatch(booking.get());
  },

  success(data, dispatch) {
    dispatch(booking.set(data));
  },
};

export default {
  get(queryParams) {
    return dispatch => {
      callbacks.get(dispatch);

      return bookingsApi
        .get(queryParams)
        .then(data => callbacks.success(data, dispatch))
        .catch(data => callbacks.error(data, dispatch));
    };
  },
};
