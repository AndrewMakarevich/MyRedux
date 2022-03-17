/*jshint esversion: 9 */
const rootReducer = combineReducers({ counter: counterReducer.counterReducer, theme: themeReducer.themeReducer });
const store = redux.createStore(rootReducer);
// console.log(store.getState());

const counterValue = document.querySelector('.counter__value');
const incrementBtn = document.querySelector('.counter__inc-btn');
const decrementBtn = document.querySelector('.counter__dec-btn');

const reRenderCounter = () => {
  counterValue.innerText = store.getState().counter;
  console.log(store.getState().counter);
};

store.subscribe(reRenderCounter);
// store.dispatch(counterReducer.actions.initializeStateValue());

incrementBtn.addEventListener('click', () => {
  store.dispatch(counterReducer.actions.incrementStateValue(5));
});
decrementBtn.addEventListener('click', () => {
  store.dispatch(counterReducer.actions.decrementStateValue(5));
});

function reRenderTheme() {
  document.body.classList.toggle('dark-theme');
}
store.subscribe(reRenderTheme);

const changeThemeBtn = document.querySelector('.change-theme-btn');

// changeThemeBtn.addEventListener('click', () => {
//   reRenderTheme();
// });