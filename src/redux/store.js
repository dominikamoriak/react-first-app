import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;

export const getCardsByColumnId = (state, columnId) => {
  const column = state.columns.find(col => col.id === columnId);
  if (column) {
    return column.cards;
  }
  return [];
};

export const getSearchString = (state) => state.searchString;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const updateSearchString = searchString => ({ type: 'UPDATE_SEARCHSTRING', payload: searchString });


const reducer = (state, action) => {
    switch(action.type) {

      case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, 
        { ...action.payload, id: shortid() }]};

        case 'ADD_CARD':
      const { columnId, card } = action.payload;
      const newColumns = state.columns.map(column => {
        if (column.id === columnId) {
          return { ...column, cards: [...column.cards, { ...card, id: shortid() }] };
        }
        return column;
      });
      return { ...state, columns: newColumns };

      case 'UPDATE_SEARCHSTRING':
        return { ...state, searchString: action.payload };

      default:
        return state;
    }
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;