/*jshint esversion: 9 */

const rootReducer = combineReducers({ counter: counterReducer.counterReducer, theme: themeReducer.themeReducer });
const store = applyMiddleWare(redux.createStore(rootReducer), [thunk, logger]);

// const store = redux.createStore(rootReducer);
console.log(store);

const counterValue = document.querySelector('.counter__value');
const incrementBtn = document.querySelector('.counter__inc-btn');
const decrementBtn = document.querySelector('.counter__dec-btn');
const asyncIncrementBtn = document.querySelector('.counter__async-inc-btn');

const reRenderCounter = () => {
  counterValue.innerText = store.getState().counter;
};

store.subscribe(reRenderCounter);
// store.dispatch(counterReducer.actions.initializeStateValue());

incrementBtn.addEventListener('click', () => {
  store.dispatch(counterReducer.actions.incrementStateValue(5));
});
decrementBtn.addEventListener('click', () => {
  store.dispatch(counterReducer.actions.decrementStateValue(5));
});
asyncIncrementBtn.addEventListener('click', () => {
  store.dispatch(counterReducer.actions.asyncIncrementStateValue(5));
});

function reRenderTheme() {
  document.body.className = store.getState().theme;
}
store.subscribe(reRenderTheme);

const changeThemeBtn = document.querySelector('.change-theme-btn');

changeThemeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    return store.dispatch(themeReducer.actions.setLightTheme());
  }
  return store.dispatch(themeReducer.actions.setDarkTheme());
});

