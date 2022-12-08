import { users, followers, repos } from '../data'

const reducer = function (state, action) {
  switch (action.type) {
    case 'SEARCH_QUERY':
      if (!action.payload)
        return {
          ...state,

          error: {
            show: true,
            type: 'Error',
            message: 'Input can not be empty!',
          },
        }
      return { ...state, getUser: action.payload }

    case 'REMOVE_ERROR':
      return { ...state, error: { show: false } }

    case 'RATE_LIMIT':
      const { limit, remaining, reset } = action.payload.rate
      return { ...state, rateLimit: { limit, remaining, reset } }

    case 'GET_USER':
      console.log(action.payload)
      return { ...state, users: action.payload }

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
  getUser: 'KouroshBhl',
}

export { reducer, initalState }
