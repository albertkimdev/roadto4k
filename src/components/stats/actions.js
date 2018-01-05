// call api to get stats for games in tournaments
// have tournament ids
import axios from 'axios'
import groupBy from 'lodash.groupby'

import {
  STATS_FETCH_START, STATS_FETCH_ERROR, STATS_FETCH_END, stats
} from '../constants'

import {
  sortPlayersIntoArray, addPlayerStats, orderStatsAdded
} from './helpers'

const url = 'http://localhost:3005/games/gamesbytournaments/'

export const getMatchesFromTournaments = () => async (dispatch, getState) => {
  /**
    Get tournament ids from state because updating via checkboxes aint working
  */
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
    // create new object with organized array of stats
    const organizedArrayByStats = [
      sortedStats[8], //kills
      sortedStats[0], // assists
      sortedStats[1], // deaths
      sortedStats[4], // gold per min
      sortedStats[15], // xp per min
      sortedStats[9], // last hits
      sortedStats[2], // denies
      sortedStats[6], // hero damage
      sortedStats[14], // tower damage
      sortedStats[7], // hero healing
      sortedStats[10], // level
      sortedStats[3], // gold
      sortedStats[5], // gold spent
      sortedStats[11], // scaled hero damage
      sortedStats[12], // scaled hero healing
      sortedStats[13], // scaled tower damage
      sortedStats[24], // kpg
      sortedStats[16], // assists pg
      sortedStats[17], // deaths pg
      sortedStats[20], // gpm pg
      sortedStats[31], // xpm pg
      sortedStats[25], // last hits pg
      sortedStats[18], // denies pg
      sortedStats[22], // hero damage pg
      sortedStats[30], // tower dmg pg
      sortedStats[23], // hero healing pg
      sortedStats[26], // lvl pg
      sortedStats[19], // gold pg
      sortedStats[21], // gold spent pg
      sortedStats[27], // scaled hero damage pg
      sortedStats[28], // scaled hero healing pg
      sortedStats[29], // scaled tower damage pg
    ]
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
      data: organizedArrayByStats
    })
  }
}
