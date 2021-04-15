import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import CharacterDetail from "./CharacterDetail";
import CharacterMovies from "./CharacterMovies";

const CharacterItem = (props) => {
  const { name, gender, birth_year, height, films, mass } = props.character;
  const { setDetailsPanel, showDetails } = props;

  const [moviesList, setMoviesList] = useState([]);

  const characterInfo = [
    { id: 1, header: "Gender", value: gender, type: "basic" },
    { id: 3, header: "Birth", value: birth_year, type: "basic" },
    { id: 2, header: "Height", value: height, type: "expanded" },
    { id: 4, header: "Mass", value: mass, type: "expanded" },
  ];
  useEffect(() => {
    showDetails &&
      Promise.all(films.map((movieUrl) => fetch(movieUrl))).then((res) =>
        Promise.all(res.map((res) => res.json())).then((res) =>{
          setMoviesList(() => [...res])
          }
        )
      );
  }, [showDetails, films]);

  return (
    <Fragment>
      <div
        className={`character__container--basic ${showDetails && "--expanded"}`}
        onClick={setDetailsPanel}
      >
        <div className="character__header">{name}</div>
        {!showDetails && characterInfo.map(
          (info) =>
            info.type === "basic" && (
              <CharacterDetail key={info.id} info={info} type="basic" />
            )
        )}
      </div>
      {showDetails && moviesList.length > 0 && (
        <div className={`character__container--additional ${showDetails && "--expanded"}`}>
          <div className="details__header --primary">About character</div>
          {characterInfo.map((info) => (
            <CharacterDetail key={info.id} info={info} type="expanded" />
          ))}
          <div className="details__header --secondary">Movies</div>
          {moviesList.map((movie, index) => (
            <CharacterMovies key={index} movie={movie} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
  showDetails: PropTypes.bool.isRequired,
  setDetailsPanel: PropTypes.func.isRequired,
};

export default CharacterItem;
