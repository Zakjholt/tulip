import React, { useContext } from 'react'
import { AuthContext } from 'utils/auth'
import { Header, FlexRow } from 'styles/layout'
import { Anchor, Brand } from 'styles/typography'

const Navbar: React.FunctionComponent = () => {
  const auth = useContext(AuthContext)

  return (
    <Header>
      <Brand>tulip</Brand>
      {!auth.isAuthenticated() ? (
        <Anchor onClick={auth.login}>Log in</Anchor>
      ) : (
        <Anchor onClick={auth.logout}>Log out</Anchor>
      )}
    </Header>
  )
}

export default Navbar
