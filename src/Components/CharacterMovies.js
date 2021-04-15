import React from "react";
import PropTypes from "prop-types";

const CharacterMovies = (props) => {
  const { title, episode_id, release_date } = props.movie;

  return (
    <div className="movie__container">
      <div>
        {title}
        <span className="movie__additionall-info"> - Episode {episode_id}</span>
      </div>
      <div className="movie__year">{release_date.slice(0, 4)}</div>
    </div>
  );
};

CharacterMovies.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default CharacterMovies;
