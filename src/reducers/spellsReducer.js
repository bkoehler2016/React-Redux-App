import { FETCH_DATA, UPDATE_SPELLS, SET_ERROR } from "../actions";

const initialState = {
  spells: [],
  isFetchingData: false,
  error: ""
};

export const spellsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        spells: []
      };
    case UPDATE_SPELLS:
      return {
        ...state,
        spells: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
