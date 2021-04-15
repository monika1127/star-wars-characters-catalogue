import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  charactersSelector,
  loadingSelector,
} from "../Redux/characters/selectors";
import {
  searchByName,
  searchMovie,
  searchByMovie,
} from "../Redux/characters/actions";
import Button from "./Button";
import CharactersList from "./CharactersList";
import BounceLoader from "react-spinners/BounceLoader";
import CharacterMovies from "./CharacterMovies";

const Search = () => {
  const [searchType, setSearchType] = useState("byName");
  const [searchValue, setSearchValue] = useState("");
  const [alert, setAlert] = useState(false);
  const [matchedMovie, setMatchedMovie] = useState("");

  const dispatch = useDispatch();

  const characters = useSelector(charactersSelector);
  const isLoading = useSelector(loadingSelector);

  const setSearchVariant = (variant) => {
    setSearchType(variant)
    setMatchedMovie('')
    setAlert(false)
  }

  const searchForCharacters = () => {
    if (searchValue.length === 0) return;
    setAlert(false);
    setMatchedMovie('')
    searchType === "byName" &&
      dispatch(searchByName(searchValue, searchCallbackName));
    searchType === "byMovie" &&
      dispatch(searchMovie(searchValue, searchCallbackMovie));
  };

  const getCharacters = (characters) => {
    dispatch(searchByMovie(characters, searchCallbackName));
    setMatchedMovie("");
  };

  const searchCallbackName = (alert) => {
    setAlert(alert);
    setSearchValue("");
  };

  const searchCallbackMovie = (movies, alert) => {
    setSearchValue("");
    setMatchedMovie(movies);
    setAlert(alert);
  };

  return (
    <div className="page__container">
      <div className="search__title">Search for characters</div>
      <div className="search__container">
        <div
          className={`search__option ${
            searchType === "byName" ? "--active" : "--inactive"
          }`}
          onClick={() =>  setSearchVariant("byName")}
        >
          by name
        </div>
        <div
          className={`search__option ${
            searchType === "byMovie" ? "--active" : "--inactive"
          }`}
          onClick={() => setSearchVariant("byMovie")}
        >
          by movie
        </div>
        <input
          className="search__input"
          type="text"
          id="character"
          placeholder="search for character..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>

      <Button size="full" variant="primary" onClick={searchForCharacters}>
        Search
      </Button>

      {/* when characters list is downloaded */}
      {isLoading && (
        <div className="spinner">
          <BounceLoader color={"#8F1F44"} loading />
        </div>
      )}
      {/* if no matches */}
      {alert && (
        <div className="search__alert">
          No matches found<div>Search for another character.</div>
        </div>
      )}
      {/* if charactes found */}
      {characters.length > 0 && (
        <CharactersList filter={false} />
      )}

      {/* if search by movie - list of movies matched */}
      {matchedMovie.length > 0 && (
        <Fragment>
          <div className="details__header --secondary">Matched movies:</div>
          {matchedMovie.map((movie, index) => (
            <div key={index} className="search__movie-picker">
              <CharacterMovies key={index} movie={movie} />
              <div className="search__movie-button">
                <Button
                  type="button"
                  variant="neutral"
                  size="small"
                  onClick={() => getCharacters(movie.characters)}
                >
                  See characters
                </Button>
              </div>
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default Search;
