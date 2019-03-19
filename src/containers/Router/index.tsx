import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from 'utils/history'

const AppRouter: React.FunctionComponent = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <div>index</div>} />
    </Switch>
  </Router>
)

export default AppRouter
