import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from './Loading'

const Wrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <div>Something went wrong!</div>
  }

  return <>{children}</>
}

export default Wrapper
