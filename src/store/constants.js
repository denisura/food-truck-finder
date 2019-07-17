const prefix = '@@food-truck-finder';

const actionPrefix = `${prefix}/action`;

export const SHOW = `${actionPrefix}/FETCH`;
export const MORE = `${actionPrefix}/MORE`;

export const REQUEST = `${actionPrefix}/FETCH_REQUEST`;
export const SUCCESS = `${actionPrefix}/FETCH_SUCCESS`;
export const FAILURE = `${actionPrefix}/FETCH_FAILURE`;

const statusPrefix = `${prefix}/status`;

export const OK = `${statusPrefix}/OK`;
export const ERROR = `${statusPrefix}/ERROR`;
export const LOADING = `${statusPrefix}/LOADING`;
