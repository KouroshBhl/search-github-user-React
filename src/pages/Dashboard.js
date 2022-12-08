import React from 'react'
import { Info, Navbar, Repos, Search, User, Followers } from '../components'
import { useGlobalContext } from '../helper/context'

const Dashboard = () => {
  return (
    <main className='min-h-screen bg-gray-900 text-gray-100 py-20 px-10 md:mx-0 '>
      <div className='flex flex-col max-w-7xl mx-auto gap-10'>
        {/* <Search /> */}
        {/* <Navbar /> */}
        <Info />
        <div className='flex flex-col md:flex-row justify-between gap-10 mt-8'>
          <User />
          <Followers />
        </div>
        <Repos />
      </div>
    </main>
  )
}

export default Dashboard
