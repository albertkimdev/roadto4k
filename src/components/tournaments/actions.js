import axios from 'axios'

import {
  TOURNAMENT_FETCH_START, TOURNAMENT_FETCH_END, TOURNAMENT_FETCH_ERROR, TOURNAMENT_CHECK
} from '../constants'

const url = 'http://localhost:3005/tournaments/all'

export const getTournamentsList = () => async (dispatch) => {
  dispatch({ type: TOURNAMENT_FETCH_START })

  // get localhost:3005/games/gamesbytournaments/?tids=1007&tids=171

  const tournaments = await axios.get(url).catch(e => {
    dispatch({ type: TOURNAMENT_FETCH_ERROR })
  })
  if (tournaments) {
    dispatch(
      {
        type: TOURNAMENT_FETCH_END,
        tournaments: tournaments.data
      }
    )
  }
}

export const checkTournament = (id, checked) => (dispatch) => {
  dispatch({
    type: TOURNAMENT_CHECK ,
    id,
    checked
  })
}