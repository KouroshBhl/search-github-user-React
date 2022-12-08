import React, { useEffect } from 'react'
import { useGlobalContext } from '../helper/context'

const ErrMessage = () => {
  const { error, dispatch } = useGlobalContext()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'REMOVE_ERROR' })
    }, 2000)

    return () => clearTimeout(timer)
  }, [dispatch])

  if (!error.show) return

  return (
    <div className=' absolute top-4 left-[50%] -translate-x-[50%] bg-gray-800 border-l-8 border-rose-600 shadow-lg px-5 py-3 rounded-lg font-poppins text-md'>
      <p>{error.message}</p>
    </div>
  )
}

export default ErrMessage
