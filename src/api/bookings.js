import { fetchApi } from '.';

const endPoints = {
  get: '/bookings',
};

export const get = payload => fetchApi(endPoints.get, payload, 'get');
