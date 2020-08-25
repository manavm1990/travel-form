import PropTypes from "prop-types"
import React from "react"

export const Table = ({ travels }) =>
  travels.length ? (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Vegan?</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody>
        {travels.map(
          ({ firstName, lastName, dietRestrictions, destination }, i) => (
            <tr key={i}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{dietRestrictions.isVegan ? "Y" : "N"}</td>
              <td>{destination}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  ) : (
    <p>
      No travels found! <span role="img" aria-labelledby="disappointed">😞</span>
    </p>
  )

Table.propTypes = { travels: PropTypes.array.isRequired }
