const logger = store => next => action => {
  console.groupCollapsed('logged data');
  console.log('Previous state', store.getState());
  next(action);
  console.log('Next state', store.getState());
  console.groupEnd();
};