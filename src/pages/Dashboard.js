import React from 'react'
import { Info, Navbar, Repos, Search, User } from '../components'
import { useGlobalContext } from '../helper/context'

const Dashboard = () => {
  return (
    <main className='h-screen bg-gray-900 text-gray-100'>
      <div className='flex flex-col max-w-7xl mx-auto'>
        <Search />
        <Navbar />
        <Info />
        <User />
        <Repos />
      </div>
    </main>
  )
}

export default Dashboard
