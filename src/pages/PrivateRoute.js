import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router'

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0()
  console.log(isAuthenticated)
  const logedIn = isAuthenticated && user
  if (!logedIn) return <Navigate to='/login' />
  return <>{children}</>
}

export default PrivateRoute
