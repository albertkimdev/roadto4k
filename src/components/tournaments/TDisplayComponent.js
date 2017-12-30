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

class TDisplayComponent extends Component {
  componentDidMount() {
    this.props.getTournamentsList()
  }

  updateMatches(ids, tid, checked) {
    // takes props as argument
    let urlArr = []
    for (let id in ids) {
      if (ids[id].checked) urlArr.push(id)
    }
    if (checked) urlArr.push(tid)
    this.props.getMatchesFromTournaments(urlArr)
  }

  printCheckbox(t, i, checkedTournaments) {
    const { tid, name } = t
    const checked = this.getChecked(checkedTournaments, tid)
    //console.log(this.props)
    return (
      <TNameBox
        key={i}
        tid={tid}
        checkTournament={this.props.checkTournament.bind(this)}
        checked={checked}
        name={name}
        updateMatches={this.updateMatches.bind(this)}
        checkedTournaments={checkedTournaments}
      />
    )
  }

  getChecked(checkedTournys, tid) {
    if (tid in checkedTournys) {
      return checkedTournys[tid].checked
    }
    return false
  }

  printLoadingOrContent(loading, loadingError, tournaments) {
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
    const { checkedTournaments } = tournaments
    return (
      <TNameBoxContainer>
        {tournaments.tournaments.map((t, i) => this.printCheckbox(t, i, checkedTournaments))}
      </TNameBoxContainer>
    )
  }

  render() {
    const { tournaments, loading, loadingError } = this.props

    return (
      <Container>
        {this.printLoadingOrContent(
          loading, loadingError, tournaments
        )}
      </Container>
    )
  }
}

export default TDisplayComponent
