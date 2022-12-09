import { act } from 'react-dom/test-utils'
import { users, followers, repos } from '../data'
import { DEFAULT_USER } from '../helper/config'

const reducer = function (state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }

    case 'SEARCH_QUERY':
      if (!action.payload)
        return {
          ...state,
          loading: false,
          error: {
            show: true,
            type: 'Error',
            message: 'Input can not be empty!',
          },
        }
      return { ...state, getUser: action.payload }

    case 'REMOVE_ERROR':
      return { ...state, error: { show: false }, loading: false }

    case 'RATE_LIMIT':
      const { limit, remaining, reset } = action.payload.rate
      return {
        ...state,
        rateLimit: { limit, remaining, reset },
        loading: false,
      }

    case 'GET_USER':
      const { followers_url, repos_url } = action.payload
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case 'GET_FOLLOWERS':
      return { ...state, followers: action.payload }

    case 'GET_REPOS':
      return { ...state, repos: action.payload }

    case 'ERROR':
      const err = `User can not find (${action.payload})`
      return {
        ...state,
        loading: false,
        error: { show: true, type: 'ERROR', message: err },
      }

    default:
      return state
  }
}

const initalState = {
  users,
  followers,
  repos,
  searchQuery: '',
  error: { show: false, type: '', message: '' },
  rateLimit: { limit: 0, remaining: 0, reset: 0 },
  getUser: DEFAULT_USER,
  loading: true,
}

export { reducer, initalState }
