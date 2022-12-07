import React from 'react'
import { GoRepoClone } from 'react-icons/go'

const InfoDetail = ({ type, icon, value }) => {
  return (
    <div className='bg-gray-800 flex justify-center items-center gap-4 rounded-xl px-8 py-4'>
      {icon}
      <div className='flex flex-col'>
        <span>{value}</span>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default InfoDetail
