import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <section className='flex justify-center items-center min-h-screen bg-slate-900'>
      <button
        className='px-6 py-3 rounded-xl shadow-lg bg-slate-700 hover:bg-slate-600 transition-all text-white'
        onClick={() => loginWithRedirect()}
      >
        LOG IN / SIGN UP
      </button>
    </section>
  )
}

export default Login
//ownerproof-2785499-1670571785-55523f9454fc
