import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { user, logout } = useAuth0()

  console.log(user)
  return (
    <div className='bg-gray-800 text-center py-4 rounded-lg'>
      <div className='flex justify-around '>
        <div className='flex items-center gap-4'>
          <img
            src={user.picture}
            alt='profile'
            className='h-10 w-10 rounded-full'
          />
          <p>
            Welcome,
            <span className='font-bold text-amber-500'> {user.name}</span>
          </p>
        </div>
        <button
          className='btn'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Navbar
