import React from 'react'
import { Info, Navbar, Repos, Search, User, Followers } from '../components'

const Dashboard = () => {
  return (
    <main className='min-h-screen  bg-gray-900 text-gray-100 py-20 px-2 sm:px-10 md:mx-0 relative'>
      <div className='flex flex-col lg:w-3/4 mx-auto gap-10'>
        <Search />
        {/* <Navbar /> */}
        <Info />
        <div className='flex flex-col lg:flex-row justify-between gap-10 mt-8'>
          <User />
          <Followers />
        </div>

        <Repos />
      </div>
    </main>
  )
}

export default Dashboard
