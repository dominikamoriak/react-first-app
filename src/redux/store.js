import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

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