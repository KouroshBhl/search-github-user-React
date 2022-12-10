import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0()

  console.log(isAuthenticated, user, isLoading)
  return (
    <div className='bg-gray-800 text-center py-4 rounded-lg'>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>

      <button
        className='px-6 py-3 rounded-xl shadow-lg bg-slate-700 hover:bg-slate-600 transition-all text-white'
        onClick={loginWithRedirect}
      >
        LOG IN / SIGN UP
      </button>
    </div>
  )
}

export default Navbar
