import React from 'react'

const Card = ({ children }) => {
  return (
    <section className='w-full bg-gray-800 rounded-b-lg rounded-tr-lg py-8 px-5 md:px-14 flex flex-col relative'>
      {children}
    </section>
  )
}

export default Card
