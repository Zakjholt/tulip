import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from 'utils/history'
import Home from 'containers/Home'

const AppRouter: React.FunctionComponent = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default AppRouter
