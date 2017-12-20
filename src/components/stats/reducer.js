import {
  TOURNAMENT_CHECK
} from '../constants'

const initState = {
  1007: {
    checked: true
  }
}

export default function(state = initState, action) {
  switch(action.type) {
    case TOURNAMENT_CHECK:
      const { id, checked } = action
      return {
        ...state,
        [id]: {
          checked
        }
      }
  }
  return state
}
