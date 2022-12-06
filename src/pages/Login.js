import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='flex justify-center items-center min-h-screen bg-slate-900'>
      <Link className='px-6 py-3 rounded-xl shadow-lg bg-slate-700 hover:bg-slate-600 transition-all text-white'>
        LOG IN / SIGN UP
      </Link>
    </section>
  )
}

export default Login
