import React, { useEffect, useState } from "react"

import { Login } from "./Login"
import { Table } from "./Table"

import api from "api"

export const LoginTable = () => {
  const [travels, setTravels] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    user &&
      (async () => {
        try {
          const jsonRes = await api.showTravels(user)
          setTravels(jsonRes)
        } catch (error) {
          console.error(error)
        }
      })()
  }, [user])

  const loginHandler = (event) => {
    event.preventDefault()
    setUser(event.target.elements[0].value)
  }

  if (!user) {
    return <Login handler={loginHandler} />
  }
  return <Table travels={travels} />
}
