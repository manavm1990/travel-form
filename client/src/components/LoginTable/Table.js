import PropTypes from "prop-types"
import React from "react"

export const Table = ({ travels }) => {
  return (
    <ul>
      {travels.map(({ destination }, i) => <li key={i}>{destination}</li>)}
    </ul>
  )
}

Table.propTypes = { travels: PropTypes.array.isRequired }
