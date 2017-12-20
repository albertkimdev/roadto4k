import {
  TOURNAMENT_FETCH_START, TOURNAMENT_FETCH_END, TOURNAMENT_FETCH_ERROR, TOURNAMENT_CHECK
} from '../constants'

const initState = {
  checkedTournaments: {
    1007: {
      checked: true
    }
  }
}

export default function(state = initState, action) {
  switch(action.type) {
    case TOURNAMENT_FETCH_START:
      return state
    case TOURNAMENT_FETCH_ERROR:
      return state
    case TOURNAMENT_FETCH_END:
      return {
        ...state,
        tournaments: action.tournaments
      }
    case TOURNAMENT_CHECK:
      const { id, checked } = action
      return {
        ...state,
        checkedTournaments: {
          ...state.checkedTournaments,
          [id]: {
            checked
          }
        }
      }
  }
  return state
}
