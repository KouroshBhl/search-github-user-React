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
      return state

    case 'REMOVE_ERROR':
      return { ...state, error: { show: false } }

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
}

export { reducer, initalState }
