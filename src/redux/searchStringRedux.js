
//selectors
export const getSearchString = (state) => state.searchString;

//actions
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

//action creators
export const updateSearchString = searchString => ({ type: UPDATE_SEARCHSTRING, payload: searchString });

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload;
      default:
        return statePart;
    };
  };

export default searchStringReducer;