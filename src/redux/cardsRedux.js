import shortid from 'shortid';
import strContains from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getCardsByColumnId = (state, columnId) => {
    return state.cards.filter(col => col.columnId === columnId);
};

export const getCardsByIsFavorite = (state) => 
  state.cards.filter(card => card.isFavorite === true);

export const getCardById = (state, cardId) =>
  state.cards.find(card => card.id === cardId);

//actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

//action creators
export const addCard = payload => ({ type: ADD_CARD, payload });

export const toggleCardFavorite = cardId => ({ type: TOGGLE_CARD_FAVORITE, payload: cardId });

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, {...action.payload.card, id: shortid() }];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ?
          {...card, isFavorite: !card.isFavorite} : card);
      default:
        return statePart;
    };
  };

export default cardsReducer;