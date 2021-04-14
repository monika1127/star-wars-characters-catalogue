import React from "react";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  const { header, value } = props.info;
  const { type } = props;

  return (
    <div className={`character__info --${type}`}>
      <div className="character__info-header">{header}</div>
      <div className="character__info-value">{value}</div>
    </div>
  );
};
CharacterDetail.propTypes = {
  info: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default CharacterDetail;
