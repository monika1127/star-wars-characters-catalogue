import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { charactersSelector } from "../Redux/characters/selectors";
import CharacterItem from "./CharacterItem";

const CharactersList = (props) => {
  const { filter } = props;
  const [characterDetailsId, setcharacterDetailsId] = useState(null);
  const characters = useSelector(charactersSelector);

  return (
    <Fragment>
      {characters.map(
        (character, index) =>
          ((filter && index < characters.length - 5) || !filter) && (
            <CharacterItem
              key={index}
              character={character}
              showDetails={index === characterDetailsId}
              setDetailsPanel={() => setcharacterDetailsId(index)}
            />
          )
      )}
    </Fragment>
  );
};

CharactersList.propTypes = {
  filter: PropTypes.bool.isRequired,
};

export default CharactersList;
