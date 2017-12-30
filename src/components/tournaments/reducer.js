import {
  TOURNAMENT_FETCH_START, TOURNAMENT_FETCH_END, TOURNAMENT_FETCH_ERROR, TOURNAMENT_CHECK,
} from '../constants'

const initState = {
  tournaments: [],
  checkedTournaments: {
    1007: {
      checked: true,
    },
  },
  loading: true,
  loadingError: false,
}

export default function (state = initState, action) {
  switch (action.type) {
    case TOURNAMENT_FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case TOURNAMENT_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        loadingError: true
      }
    case TOURNAMENT_FETCH_END:
      return {
        ...state,
        loading: false,
        loadingError: false,
        tournaments: action.tournaments,
      }
    case TOURNAMENT_CHECK: {
      const { id, checked } = action
      return {
        ...state,
        checkedTournaments: {
          ...state.checkedTournaments,
          [id]: {
            checked,
          },
        },
      }
    }
    default:
      return state
  }
}
