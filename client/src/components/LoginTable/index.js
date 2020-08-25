import React, { useState } from "react"

import { Login } from "./Login"
import { Table } from "./Table"

export const LoginTable = () => {
  const [travels, setTravels] = useState([])
  const [user, setUser] = useState("")

  const loginHandler = (event) => {
    event.preventDefault()
    setUser(event.target.elements[0].value)
  }

  if (!user) {
    return <Login handler={loginHandler} />
  }
  return <Table travels={travels} />
}
