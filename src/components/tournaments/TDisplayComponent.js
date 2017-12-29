import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 70%;
  display: flex;
  background-color: orange;
  @media (max-width:500px) {
    width: 90%;
  }
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
      <div key={i}>
        <input type="checkbox" id={tid}
          onClick={(e) => {
            this.props.checkTournament(tid, e.target.checked)
            this.updateMatches(checkedTournaments, tid, e.target.checked)
            //console.log(this.props)
          }}
          checked={checked} />
        <label htmlFor={tid}>{name}</label>
      </div>
    )
  }

  getChecked(checkedTournys, tid) {
    if (tid in checkedTournys) {
      return checkedTournys[tid].checked
    }
    return false
  }

  printLoading() {
    return <div>loading</div>
  }

  render() {
    const { tournaments } = this.props
    const { checkedTournaments } = tournaments
    return (
      <Container>
        {
          tournaments.tournaments
            ? tournaments.tournaments.map((t, i) => this.printCheckbox(t, i, checkedTournaments))
            : this.printLoading()
        }
      </Container>
    )
  }
}

export default TDisplayComponent
