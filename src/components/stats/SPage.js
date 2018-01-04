import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import SBox from './SBox'

import {
  getMatchesFromTournaments
} from './actions'

// in render
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
// printStatBoxes
const BoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media (max-width:600px) {
    width: 90%;
  }
`

class SPage extends Component {
  componentDidMount() {
    this.props.getMatchesFromTournaments()
  }

  printStatBoxes(data) {
    return (
      <BoxesContainer>
       {data.map((d, i) => ( <SBox key={i} data={d} /> ))}
      </BoxesContainer>
    )
  }

  printLoadingOrContent(loading, loadingError, data, filterOption) {
    if (loading) {
      return (
        <div>Loading.....</div>
      )
    }
    if (loadingError) {
      return (
        <div>
          <p>Loading Error click button to try again</p>
          <button
            onClick={() => {
              this.props.getMatchesFromTournaments()
            }}
          >
            Refresh
          </button>
        </div>
      )
    }
    let thedata
    if (filterOption === 'pg') {
      thedata = data.slice(16, data.length)
    } else if (filterOption === 'total') {
      thedata = data.slice(0, 16)
    }
    return (
      this.printStatBoxes(thedata)
    )
  }

  render() {
    const {
      loading, loadingError, data, filterOption
    } = this.props.stats
    return (
      <Container>
        {this.printLoadingOrContent(loading, loadingError, data, filterOption)}
      </Container>
    )
  }
}

const mapStateToProps = (props) => ({
  stats: props.stats,
  checkedTournaments: props.tournaments.checkedTournaments
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMatchesFromTournaments
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SPage)
