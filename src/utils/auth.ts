import { createContext } from 'react'
import auth0, { Auth0DecodedHash } from 'auth0-js'

import history from 'utils/history'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
    redirectUri: `${process.env.REACT_APP_HOST_URL}/callback`,
    responseType: 'token id_token',
    scope: 'openid'
  })
  accessToken = ''
  idToken = ''
  expiresAt = 0

  // Takes user through auth0 flow
  login = () => {
    this.auth0.authorize()
  }

  // Parses query hash into auth info
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        history.replace('/')
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  getAccessToken = () => this.accessToken

  getIdToken = () => this.idToken

  setSession = (authResult: Auth0DecodedHash) => {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true')

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn! * 1000 + new Date().getTime()
    this.accessToken = authResult.accessToken!
    this.idToken = authResult.idToken!
    this.expiresAt = expiresAt

    // navigate to the home route
    history.replace('/dashboard')
  }

  renewSession = () => {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        this.logout()
        console.log(err)
        alert(`Could not get a new token (${err.error}: ${err.description}).`)
      }
    })
  }

  logout = () => {
    // Remove tokens and expiry time
    this.accessToken = ''
    this.idToken = ''
    this.expiresAt = 0

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn')

    // navigate to the home route
    history.replace('/')
  }

  isAuthenticated = () => new Date().getTime() < this.expiresAt
}

export const AuthService = new Auth()

export const AuthContext = createContext(AuthService)
