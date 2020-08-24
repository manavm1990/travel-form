import PropTypes from "prop-types";
import React from "react";

export const Input = ({id, placeholder, type, handler}) => {
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{placeholder}</label>
      <div className="control">
        <input
          type={type}
          id={id}
          onChange={handler}
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  handler: PropTypes.func,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

Input.defaultProps = { type: "text" }
