import reducer from './bookings';
import constant from 'constants/booking';

describe('Testing bookings reducer', () => {
  it('Should return the initial state', () => {
    const obReceived = reducer(undefined, {});
    const obExpected = {
      data: null,
      error: null,
      loading: false,
    };

    expect(obReceived).toEqual(obExpected);
  });

  it('Should handle get bookings works', () => {
    const obReceived = reducer(
      {
        data: null,
        error: null,
        loading: false,
      },
      {
        type: constant.get,
      }
    );
    const obExpected = {
      data: null,
      error: null,
      loading: true,
    };

    expect(obReceived).toEqual(obExpected);
  });

  it('Should handle set bookings works', () => {
    const obReceived = reducer(
      {
        data: null,
        error: null,
        loading: true,
      },
      {
        type: constant.set,
        data: [{
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
        }],
      }
    );
    const obExpected = {
      loading: false,
      error: null,
      data: [{
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
      }],
    };

    expect(obReceived).toEqual(obExpected);
  });
});
