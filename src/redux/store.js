import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors
export const getAllColumns = (state) => state.columns;

export const getColumnsByList = ({ columns }, listId) => 
  columns.filter(column => column.listId === listId);

export const getColumnsByListId = (state, listId) => {
  return state.columns.filter(column => column.listId === listId);
};

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });


  const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
  }

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;