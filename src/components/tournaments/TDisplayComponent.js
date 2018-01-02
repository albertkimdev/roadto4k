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

  updateMatches(ids, tid, checked) {
    console.log(this.props)
    let urlArr = []
    //console.log(tid, checked)
    const idKeys = Object.keys(ids)
    //console.log(`urlArr = ${urlArr}`)

    for (let i = 0, n = idKeys.length; i < n; i++) {
      const index = idKeys[i]
      console.log(index, tid)
      if (index !== tid) {
        console.log('swag')
        if (ids[index].checked) {
          urlArr.push(index)
        }
      }
    }
  //  console.log(`urlArr = ${urlArr}`)
    if (checked) {
      urlArr.push(tid)
    }
    console.log(`urlArr = ${urlArr}`)
    this.props.getMatchesFromTournaments(urlArr)
  }

  printCheckbox(t, i, checkedTournaments) {
    const { tid, name } = t
    const checked = this.getChecked(checkedTournaments, tid)

    return (
      <TNameContainer>
        <input
          type="checkbox"
          id={tid}
          onChange={(e) => {
            this.props.checkTournament(tid, e.target.checked)
            this.updateMatches(this.props.checkedTournaments, tid, e.target.checked)
          }}
          checked={checked}
        />
        <label htmlFor={tid}>{name}</label>
      </TNameContainer>
    )
    // return (
    //   <TNameBox
    //     key={i}
    //     tid={tid}
    //     checkTournament={this.props.checkTournament.bind(this)}
    //     checked={checked}
    //     name={name}
    //     updateMatches={this.updateMatches.bind(this)}
    //     checkedTournaments={checkedTournaments}
    //   />
    // )
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
