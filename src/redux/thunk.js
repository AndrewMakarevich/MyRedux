const thunk = store => next => action => {
  if (typeof action === "function") {
    return action(next);
  }
  return next(action);
};