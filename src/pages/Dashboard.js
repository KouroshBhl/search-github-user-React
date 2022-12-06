import React from 'react'
import { Info, Navbar, Repos, Search, User } from '../components'

const Dashboard = () => {
  return (
    <div>
      <Search />
      <Navbar />
      <Info />
      <User />
      <Repos />
    </div>
  )
}

export default Dashboard
