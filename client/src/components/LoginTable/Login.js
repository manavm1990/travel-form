import PropTypes from "prop-types"
import React from "react"

export const Login = ({ handler }) => {
  return (
    <form className="center mt-5" onSubmit={handler}>
      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <div className="control">
          <input
            className="input is-primary"
            type="email"
            placeholder="Primary input"
            id="email"
          />
        </div>
      </div>
      <button className="button is-success">Get Travel Plans</button>
    </form>
  )
}

Login.propTypes = {
  handler: PropTypes.func,
}
