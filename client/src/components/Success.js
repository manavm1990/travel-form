import PropTypes from "prop-types"
import React from "react"

export const Success = ({ location: { message } }) => {
  return <p>Success! {message}</p>
}

Success.propTypes = {
  location: PropTypes.shape({ message: PropTypes.string }),
}

Success.defaultProps = {
  location: {message: "Registered for Travel!"}
}
