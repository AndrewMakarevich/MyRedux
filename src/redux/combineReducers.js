function combineReducers(reducersObject) {
  const initialState = {};

  Object.keys(reducersObject).forEach(reducerKey => {
    const reducer = reducersObject[reducerKey];
    initialState[reducerKey] = reducer();
  });

  return function (state = initialState, action = {}) {
    let stateCopy = JSON.parse(JSON.stringify(state));

    Object.keys(reducersObject).forEach(reducerKey => {
      const reducer = reducersObject[reducerKey];
      const changedParam = reducer(state[reducerKey], action);
      stateCopy = { ...stateCopy, [reducerKey]: changedParam };
    });

    return stateCopy;
  };
}