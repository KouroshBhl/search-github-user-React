import React, { useReducer, useContext } from 'react'
import { initalState, reducer } from './reducer'
import axios from 'axios'

const Context = React.createContext()

const ContextAPI = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState)

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
