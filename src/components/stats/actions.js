// call api to get stats for games in tournaments
// have tournament ids
import {
  STATS_FETCH_START, STATS_FETCH_ERROR, STATS_FETCH_END
} from '../constants'

import axios from 'axios'
import groupBy from 'lodash.groupby'

import {
  sortPlayersIntoArray, addPlayerStats
} from './helpers'

let url = 'http://localhost:3005/games/gamesbytournaments/'

export const getMatchesFromTournaments = (ids) => async (dispatch) => {
  dispatch({ type: STATS_FETCH_START })

  const games = await axios.post(url, ids).catch(e => {
    dispatch({ type: STATS_FETCH_ERROR })
  })
  const players = sortPlayersIntoArray(games.data)
  const grouped = groupBy(players, (p) => p.account_id)
  const statsAdded = addPlayerStats(grouped)
  console.log(statsAdded)
  if (games) {
    dispatch({
      type: STATS_FETCH_END
    })
  }
}
