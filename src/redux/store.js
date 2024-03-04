import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains.js';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getSearchString = (state) => state.searchString;

export const getAllColumns = (state) => state.columns;

export const getCardsByColumnId = (state, columnId) => {
  return state.cards.filter(col => col.columnId === columnId);
};

export const getListById = ({ lists }, listId ) =>
  lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => 
  columns.filter(column => column.listId === listId);

export const getAllLists = (state) => state.lists;

export const getColumnsByListId = (state, listId) => {
  return state.columns.filter(column => column.listId === listId);
};

export const getCardsByIsFavorite = (state) => 
  state.cards.filter(card => card.isFavorite === true);

export const getCardById = (state, cardId) =>
  state.cards.find(card => card.id === cardId);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchString = searchString => ({ type: 'UPDATE_SEARCHSTRING', payload: searchString });

export const addList = payload => ({ type: 'ADD_LIST', payload});

export const toggleCardFavorite = cardId => ({ type: 'TOGGLE_CARD_FAVORITE', payload: cardId });


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