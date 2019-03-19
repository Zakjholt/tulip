import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { AuthContext } from 'utils/auth'
import Page from 'components/Page'

const Dashboard: React.FunctionComponent = () => {
  const auth = useContext(AuthContext)

  if (!auth.isAuthenticated()) {
    return <Redirect to="/" />
  }

  return <Page>This is a protected page!</Page>
}

export default Dashboard
