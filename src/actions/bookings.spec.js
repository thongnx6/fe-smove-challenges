import 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { config as apiConfig } from 'api/config';
import bookingAction from './bookings';
import constant from 'constants/booking';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Testing Booking Action and Action Creator', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Creates bookingAction:get success when fetching bookings has been done', () => {
    const data = {
      id: 1,
      car: {
        id: 1,
        licence_plate: 'SKR5282T'
      },
      book_start: 1523999353,
      book_end: 1524039985,
      pickup: {
        id: 34,
        code: "HLD",
        lat: 1.31,
        lng: 103.793
      },
      dropoff: {
        id: 82,
        code: "BRG",
        lat: 1.36,
        lng: 103.859
      },
      user: {
        id: 38348,
        name: "Han Solo"
      }
    }
    const expectedActions = [
      { type: constant.get },
      {
        type: constant.set,
        data: data,
      },
    ];
    const store = mockStore({ todos: [] });

    fetchMock.get(
      `${apiConfig.url}/bookings`,
      data
    );

    return store
      .dispatch(bookingAction.get())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
