/*jshint esversion: 9 */
const INCREMENT = 'INCREMENT';
const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
const DECREMENT = 'DECREMENT';
const INITIALIZE = 'INITIALIZE';

const counterReducer = {
  counterReducer(state = 0, action = {}) {
    switch (action.type) {
      case INCREMENT:
        return state + action.value;
      case ASYNC_INCREMENT:
        return state + action.value;
      case DECREMENT:
        return state - action.value;
      default:
        return state;
    }
  },
  actions: {
    incrementStateValue(value) {
      return { type: INCREMENT, value };
    },
    asyncIncrementStateValue(value) {
      return (dispatch) => {
        setTimeout(() => {
          dispatch({ type: ASYNC_INCREMENT, value });
        }, 3000);
      };
    },
    decrementStateValue(value) {
      return { type: DECREMENT, value };
    },
    initializeStateValue() {
      return { type: INITIALIZE };
    }
  }
};

const DARK = 'DARK';
const LIGHT = 'LIGHT';

const themeReducer = {
  themeReducer(state = 'light-theme', action = {}) {
    switch (action.type) {
      case DARK:
        return 'dark-theme';
      case LIGHT:
        return 'light-theme';
      default:
        return state;
    }
  },
  actions: {
    setDarkTheme() {
      return { type: DARK };
    },
    setLightTheme() {
      return { type: LIGHT };
    }
  }
};



