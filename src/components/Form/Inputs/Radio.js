import PropTypes from "prop-types";
import React from "react";

export const Radio = ({ checked, name, value, handler }) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={handler}
    />
  )
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  handler: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

