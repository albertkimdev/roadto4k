import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import {
  getMatchesFromTournaments
} from './actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class SPage extends Component {

  updateMatches({ stats }) {
    // takes props as argument
    let urlArr = []
    for (let stat in stats) {
      if (stats[stat].checked) urlArr.push(stat)
    }
    this.props.getMatchesFromTournaments(urlArr)
  }

  componentDidMount() {
    this.updateMatches(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateMatches(this.props)
  }

  render() {
    return (
      <Container>
        <h1>Stats Page</h1>
      </Container>
    )
  }
}

const mapStateToProps = (props) => ({
  stats: props.stats
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMatchesFromTournaments
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SPage)
