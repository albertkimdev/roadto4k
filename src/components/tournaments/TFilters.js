import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TFiltersComponent from './TFiltersComponent'

const mapStateToProps = (props) => ({
  //containerstate: props.state
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // actions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TFiltersComponent)
