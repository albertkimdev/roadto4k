import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TFiltersComponent from './TFiltersComponent'

import { selectStatsFilter } from './actions'

const mapStateToProps = (props) => ({
// containerstate: props.state
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectStatsFilter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TFiltersComponent)
