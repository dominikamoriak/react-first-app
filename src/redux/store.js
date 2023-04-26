import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

//selectors
export const getFilteredCards = (state, columnId) => {
  return state.cards.filter(card => card.columnId === columnId);
};

export const getAllColumns = (state) => state.columns;

export const getCardsByColumnId = (state, columnId) => {
  return state.cards.filter(col => col.columnId === columnId);
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
          console.log('ADD_CARD', action.payload);
          const { columnId, card } = action.payload;
          const newColumns = state.columns.map(column => {
            if (column.id === columnId) {
              return { ...column, cards: [...(column.cards || []), { ...card, id: shortid() }] };
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