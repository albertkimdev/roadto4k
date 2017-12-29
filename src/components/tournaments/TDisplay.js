import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TDisplayComponent from './TDisplayComponent'

import { getTournamentsList, checkTournament } from './actions'
import { getMatchesFromTournaments } from '../stats/actions'

const mapStateToProps = (props) => ({
  tournaments: props.tournaments
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTournamentsList,
    checkTournament,
    getMatchesFromTournaments
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TDisplayComponent)
