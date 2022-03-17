/*jshint esversion: 9 */

const redux = (function () {
  function createStore(reducer, initialState) {
    let state = reducer(initialState, { type: "INIT-VALUE" });
    const subscribers = [];

    return {
      dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(sub => sub());
      },
      subscribe(callback) {
        subscribers.push(callback);
      },
      getState() {
        return state;
      }
    };
  }

  return { createStore };
})();