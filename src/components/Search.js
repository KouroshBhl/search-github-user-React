import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useGlobalContext } from '../helper/context'
import ErrMessage from './ErrMessage'

const Search = () => {
  const { dispatch, error, rateLimit } = useGlobalContext()
  const [input, setInput] = useState('')

  const formSubmitHandler = function (e) {
    e.preventDefault()
    dispatch({ type: 'SEARCH_QUERY', payload: input })
  }

  return (
    <div className='flex justify-between items-center gap-4'>
      {error.show && <ErrMessage />}

      <div className='flex items-center justify-between gap-4 bg-gray-800 px-6 py-2 rounded-lg w-3/4'>
        <form action='submit' className='w-full' onSubmit={formSubmitHandler}>
          <input
            placeholder='type Github username'
            className='bg-gray-800 p-2 focus:outline-none w-full'
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <button type='submit'>
          <BiSearch className='w-6 h-6' />
        </button>
      </div>
      <h3>
        Requsts: {rateLimit.remaining} / {rateLimit.limit}
      </h3>
    </div>
  )
}

export default Search
