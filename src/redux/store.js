import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

const initialState = {
  columns: []
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;