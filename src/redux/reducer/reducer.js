/*jshint esversion: 9 */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INITIALIZE = 'INITIALIZE';

const counterReducer = {
  counterReducer(state = 0, action = {}) {
    switch (action.type) {
      case INCREMENT:
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
        return 'light-theme';
      case LIGHT:
        return 'dark-theme';
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



