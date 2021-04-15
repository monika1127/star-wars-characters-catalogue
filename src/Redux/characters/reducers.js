import {
  GET_CHARACTERS,
  SET_LOADING,
  SET_ERROR,
  GET_MORE_CHARACTERS,
  SEARCH_CHARACTERS_BY_NAME,
  SEARCH_CHARACTERS_BY_MOVIE,
  REMOVE_LOADING,
  CLEAR_CHARACTERS_LIST,
} from "./types";

const initialState = {
  characters: [],
  isLoading: false,
  moreCharactersURL: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
        characters: [],
      };
    case GET_CHARACTERS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload.results,
        moreCharactersURL: action.payload.next,
      };
    case GET_MORE_CHARACTERS:
      const updatedCharacters = state.characters;
      Array.prototype.push.apply(updatedCharacters, action.payload.results);
      return {
        ...state,
        isLoading: false,
        characters: updatedCharacters,
        moreCharactersURL: action.payload.next,
      };
    case SEARCH_CHARACTERS_BY_NAME:
      return {
        ...state,
        isLoading: false,
        characters: action.payload.results,
      };
    case SEARCH_CHARACTERS_BY_MOVIE:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        characters: [],
      };
    case REMOVE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case CLEAR_CHARACTERS_LIST:
      return {
        ...state,
        characters: [],
        moreCharactersURL: null,
      };
    default:
      return state;
  }
};

export default reducer;
