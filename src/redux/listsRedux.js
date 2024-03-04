import shortid from 'shortid';

const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_LIST':
        return [...statePart, {...action.payload, id: shortid() }];
      default:
        return statePart;
    };
  };

  export default listsReducer;