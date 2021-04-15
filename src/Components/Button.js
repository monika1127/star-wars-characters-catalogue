import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { size, variant, type, onClick } = props;
  const children = props.children;
  return (
    <button
      className={`button btn--${size} btn--${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.oneOf(["full", "small"]),
  variant: PropTypes.oneOf(["primary", "secondary", "neutral"]),
  type: PropTypes.oneOf(["submit", "button"]),
  onClick: PropTypes.func.isRequired,
};

export default Button;
