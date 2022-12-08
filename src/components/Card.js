import React from 'react'

const Card = ({ children }) => {
  return (
    <section className='w-full bg-gray-800 rounded-xl py-8 px-5 md:px-14 flex flex-col'>
      {children}
    </section>
  )
}

export default Card
