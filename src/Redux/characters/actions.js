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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const clearCharactersList = () => {
  return {
    type: CLEAR_CHARACTERS_LIST,
  };
};

export const getCharacters = () => async (dispatch) => {
  setLoading();
  fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_CHARACTERS,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_ERROR,
      });
    });
};

export const getMoreCharacters = (url, callback) => async (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      callback();
      dispatch({
        type: GET_MORE_CHARACTERS,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_ERROR,
      });
    });
};

export const searchByName = (name, callback) => async (dispatch) => {
  dispatch(setLoading());
  fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then((res) => res.json())
    .then((res) => {
      callback(res.results.length > 0 ? false : true);
      dispatch({
        type: SEARCH_CHARACTERS_BY_NAME,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_ERROR,
      });
    });
};

//
export const searchByMovie = (characters, callback) => async (dispatch) => {
  dispatch(setLoading());
  Promise.all(characters.map((url) => fetch(url))).then((res) =>
    Promise.all(res.map((el) => el.json())).then((res) => {
      callback(res.length > 0 ? false : true);
      dispatch({
        type: SEARCH_CHARACTERS_BY_MOVIE,
        payload: res,
      });
    })
  );
};

export const searchMovie = (movie, callback) => async (dispatch) => {
  dispatch(setLoading());
  fetch(`https://swapi.dev/api/films/?search=${movie}`)
    .then((res) => res.json())
    .then((res) => {
      const moviesMatched = res.results;
      callback(moviesMatched, moviesMatched.length > 0 ? false : true);
      dispatch({
        type: REMOVE_LOADING,
      });
    })
    .catch((error) => {
      callback();
      dispatch({
        type: SET_ERROR,
      });
    });
};
