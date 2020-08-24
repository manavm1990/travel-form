import PropTypes from "prop-types"
import React from "react"

export const Checkbox = ({checked, id, handler}) => {
return (
      <input
        checked={checked}
        id={id}
        onChange={handler}
        type="checkbox"
      />
    )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  handler: PropTypes.func,
  id: PropTypes.string.isRequired,
}
