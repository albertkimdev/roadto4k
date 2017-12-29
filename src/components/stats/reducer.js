import {
  STATS_FETCH_START, STATS_FETCH_ERROR, STATS_FETCH_END
} from '../constants'

const initState = {
  loading: true,
  loadingError: false,
  data: []
}

export default function(state = initState, action) {
  switch(action.type) {
    case STATS_FETCH_START:
      return {
        ...state,
        loading: true
      }
    case STATS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        loadingError: true
      }
    case STATS_FETCH_END:
      const { data } = action
      return {
        ...state,
        loading: false,
        loadingError: false,
        data
      }
    default:
      return state
  }
  return state
}
