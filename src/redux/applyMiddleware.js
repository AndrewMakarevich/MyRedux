function applyMiddleWare(store, middlewares) {
  middlewares = middlewares.reverse();
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
}