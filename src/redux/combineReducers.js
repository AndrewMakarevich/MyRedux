function combineReducers(reducersObject) {
  const initialState = {};

  Object.keys(reducersObject).forEach(reducerKey => {
    const reducer = reducersObject[reducerKey];
    initialState[reducerKey] = reducer();
  });
  // console.log(initialState);

  return function (state = initialState, action = {}) {
    let stateCopy = JSON.parse(JSON.stringify(state));

    Object.keys(reducersObject).forEach(reducerKey => {
      const reducer = reducersObject[reducerKey];
      const changedParam = reducer(state[reducerKey], action);
      stateCopy = { ...stateCopy, [reducerKey]: changedParam };
    });
    // console.log(result);
    return stateCopy;
  };
}