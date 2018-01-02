import React, { Component } from 'react'
import styled from 'styled-components'

import TNameBox from './TNameBox'

const Container = styled.div`
  width: 70%;
  display: flex;
  background-color: orange;
  @media (max-width:600px) {
    width: 90%;
  }
`
const TNameBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const TNameContainer = styled.div`
  background-color: grey;
  margin: 5px;
  padding: 5px;
  @media (max-width:500px) {
    width: 90%;
  }
`

class TDisplayComponent extends Component {
  componentDidMount() {
    this.props.getTournamentsList()
  }

  getChecked(checkedTournys, tid) {
    if (tid in checkedTournys) {
      return checkedTournys[tid].checked
    }
    return false
  }

  printCheckbox(t, i, checkedTournaments) {
    const { tid, name } = t
    const checked = this.getChecked(checkedTournaments, tid)

    return (
      <TNameBox
        key={i}
        tid={tid}
        checkTournament={this.props.checkTournament.bind(this)}
        checked={checked}
        name={name}
        getMatchesFromTournaments={this.props.getMatchesFromTournaments.bind(this)}
      />
    )
  }


  printLoadingOrContent(loading, loadingError, tournaments, checkedTournaments) {
    if (loading) {
      return <div>loading</div>
    }
    if (loadingError) {
      return (
        <div>
          <p>Loading Error click button to try again</p>
          <button
            onClick={() => {
              this.props.getTournamentsList()
            }}
          >
            Refresh
          </button>
        </div>
      )
    }
    return (
      <TNameBoxContainer>
        {tournaments.tournaments.map((t, i) => this.printCheckbox(t, i, checkedTournaments))}
      </TNameBoxContainer>
    )
  }

  render() {
    const { tournaments, loading, loadingError, checkedTournaments } = this.props

    return (
      <Container>
        {this.printLoadingOrContent(
          loading, loadingError, tournaments, checkedTournaments
        )}
      </Container>
    )
  }
}

export default TDisplayComponent
