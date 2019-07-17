import { SHOW, MORE, REQUEST, SUCCESS, FAILURE } from './constants';

export const show = () => ({
  type: SHOW,
});

export const more = () => ({
  type: MORE,
});

export const onRequest = () => ({
  type: REQUEST,
});

export const onSuccess = (data, hasMore) => ({
  type: SUCCESS,
  data,
  hasMore,
});

export const onFailure = error => ({
  type: FAILURE,
  error,
});
