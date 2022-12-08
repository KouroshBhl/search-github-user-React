import React from 'react'

const InfoDetail = ({ type, icon, value }) => {
  return (
    <div className='bg-gray-800 flex  items-center gap-8 rounded-xl px-5 py-5 w-full justify-around'>
      <div className='bg-gray-700 p-3 rounded-full'>{icon}</div>
      <div className='flex flex-col gap-2'>
        <span className='text-2xl font-bold'>{value}</span>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default InfoDetail
