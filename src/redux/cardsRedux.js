import shortid from 'shortid';

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_CARD':
        return [...statePart, {...action.payload.card, id: shortid() }];
      case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.payload) ?
          {...card, isFavorite: !card.isFavorite} : card);
      default:
        return statePart;
    };
  };

export default cardsReducer;