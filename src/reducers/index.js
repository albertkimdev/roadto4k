import { combineReducers } from 'redux'

import tournaments from '../components/tournaments/reducer'
import stats from '../components/stats/reducer'

export default combineReducers({
  tournaments,
  stats
})
