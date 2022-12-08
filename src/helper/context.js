import React, { useReducer, useContext, useEffect } from 'react'
import { initalState, reducer } from './reducer'
import { ENDPOINT_API, RATE_LIMIT } from '../helper/config'
import { timeOut } from './axios'
import axios from 'axios'
import { TIMEOUT_SEC } from '../helper/config'

const Context = React.createContext()

const ContextAPI = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState)

  const getData = async function (type, url) {
    try {
      const data = await Promise.race([axios(url), timeOut(TIMEOUT_SEC)])
      if (data.status !== 200) throw new Error('Can not get data')
      dispatch({ type, payload: data.data })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData('RATE_LIMIT', `${ENDPOINT_API}${RATE_LIMIT}`)
  }, [])

  return (
    <Context.Provider value={{ dispatch, ...state }}>
      {children}
    </Context.Provider>
  )
}

const useGlobalContext = function () {
  return useContext(Context)
}

export { useGlobalContext, ContextAPI }
