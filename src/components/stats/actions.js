// call api to get stats for games in tournaments
// have tournament ids
import {
  STATS_FETCH_START, STATS_FETCH_ERROR, STATS_FETCH_END, stats
} from '../constants'

import axios from 'axios'
import groupBy from 'lodash.groupby'

import {
  sortPlayersIntoArray, addPlayerStats, orderStatsAdded
} from './helpers'

let url = 'http://localhost:3005/games/gamesbytournaments/'

export const getMatchesFromTournaments = (ids) => async (dispatch, getState) => {
  const idzs = getState().tournaments.checkedTournaments
  const idsEntries = Object.entries(idzs)

  let idArr = []
  for (let i = 0; i < idsEntries.length; i++) {
    const id = idsEntries[i]
    const checked = id[1].checked
    if (checked) {
      idArr.push(id[0])
    }
  }
  console.log(idArr)

  dispatch({ type: STATS_FETCH_START })

  const games = await axios.post(url, idArr).catch(e => {
    dispatch({ type: STATS_FETCH_ERROR })
  })

/*
   v - where the magic happens
   aka where we take the api data and turn it into displayable data
*/
  if (games) {
    const players = sortPlayersIntoArray(games.data) // organize data
    const grouped = groupBy(players, (p) => p.account_id)
    const statsAdded = addPlayerStats(grouped)
    const sortedStats = orderStatsAdded(statsAdded, stats)
  /**
    Now there is an array of each stats element as a key
    Containing an array of the top X players from that tournament matches
    In the stats category
    NEXT!!
    Send to store as big array?
  */
/*
  ^ - where the magic stops
*/
    dispatch({
      type: STATS_FETCH_END,
      data: sortedStats
    })
  }
}
