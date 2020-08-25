import React from "react"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
  const location = useLocation()

  return (
    <header className="hero has-background-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Link to="/">
            <h1 className="title">Register for Travel</h1>
          </Link>
          {location.pathname === "/" ? (
            <Link className="button is-link" to="/login">
              Login
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  )
}
