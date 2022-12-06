import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const Error = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-10 min-h-screen text-white bg-gray-800'>
      <h1 className='text-8xl'>404</h1>
      <h2 className='text-4xl'>page not found!</h2>
      <div className='flex justify-center items-center px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 gap-2'>
        <Link to='/'>Go back home</Link>
        <FaHome />
      </div>
    </div>
  )
}

export default Error
