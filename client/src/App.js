import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Header, Form, LoginTable, Feedback, Four04 } from "./components"

import "./App.css"

export const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route exact={true} path="/">
        <Form />
      </Route>
      <Route path="/login">
        <LoginTable />
      </Route>
      <Route path="/feedback">
        <Feedback />
      </Route>
      <Route path="*">
        <Four04 />
      </Route>
    </Switch>
  </Router>
)
