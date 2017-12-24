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
  background-color: green;
`
// printStatBoxes
const BoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 70%;
  background-color: pink;
  @media (max-width:500px) {
    width: 90%;
  }
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
  //
  componentDidMount() {
    this.updateMatches(this.props)
  }

  printStatBoxes(data) {
    return (
      <BoxesContainer>
       {data.map((d, i) => ( <SBox data={d} /> ))}
      </BoxesContainer>
    )
  }
  //
  render() {
    const { loading, loadingError, data } = this.props.stats

    return (
      <Container>
        <h1>Stats Page</h1>
        {
          loading && data.length > 0 ? <div>loading</div>
            : this.printStatBoxes(data)
        }
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
