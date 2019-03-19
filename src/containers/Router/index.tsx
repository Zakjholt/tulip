import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from 'utils/history'
import { AuthService } from 'utils/auth'
import Home from 'containers/Home'
import Dashboard from 'containers/Dashboard'

const AppRouter: React.FunctionComponent = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route
        path="/callback"
        render={props => {
          if (/access_token|id_token|error/.test(props.location.hash)) {
            AuthService.handleAuthentication()
          }

          return <div>loading...</div>
        }}
      />
    </Switch>
  </Router>
)

export default AppRouter
