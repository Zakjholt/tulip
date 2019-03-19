import React from 'react'

import Router from 'containers/Router'

import { AuthContext, AuthService } from 'utils/auth'

/**
 * Use app to wrap the router in any context providers
 */
const App: React.FunctionComponent = () => (
  <AuthContext.Provider value={AuthService}>
    <Router />
  </AuthContext.Provider>
)

export default App
