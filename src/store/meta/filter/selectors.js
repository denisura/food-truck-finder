const currentDate = new Date();

export const initialState = {
  dayorder: currentDate.getDay(),
  time: currentDate.getHours() + ':' + currentDate.getMinutes(),
};
