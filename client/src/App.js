import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Header, Form, LoginTable } from "./components"

import "./App.css"

export const App = () => (
  <Router>
    <Header />

    <Route exact={true} path="/">
      <Form />
    </Route>

    <Switch>
      <Route path="/login">
        <LoginTable />
      </Route>
    </Switch>
  </Router>
)
