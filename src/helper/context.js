import React, { useReducer, useContext, useEffect } from 'react'
import { initalState, reducer } from './reducer'
import { ENDPOINT_API, RATE_LIMIT, GET_USER } from '../helper/config'
import { timeOut } from './axios'
import axios from 'axios'
import { TIMEOUT_SEC } from '../helper/config'

const Context = React.createContext()

const ContextAPI = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState)

  const getData = async function (type, url) {
    dispatch({ type: 'LOADING' })
    try {
      const data = await Promise.race([axios(url), timeOut(TIMEOUT_SEC)])
      dispatch({ type, payload: data.data })
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.response.status })
    }
  }

  useEffect(() => {
    getData('RATE_LIMIT', `${ENDPOINT_API}${RATE_LIMIT}`)
  }, [])

  useEffect(() => {
    getData('GET_USER', `${ENDPOINT_API}${GET_USER}${state.getUser}`)
    getData(
      'GET_FOLLOWERS',
      `${ENDPOINT_API}${GET_USER}${state.getUser}/followers`
    )

    getData('GET_REPOS', `${ENDPOINT_API}${GET_USER}${state.getUser}/repos`)
  }, [state.getUser])

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
