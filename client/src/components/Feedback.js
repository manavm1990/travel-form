import React from "react"

import { useLocation } from "react-router-dom"

export const Feedback = () => {
  const {
    state: {
      error
    }
  } = useLocation()

  return error ? (
    <p className="has-text-danger">
      Currently facing issue! {error.name} - {error.message}
    </p>
  ) : (
    <p className="has-text-success">Gottchu!</p>
  )
}
