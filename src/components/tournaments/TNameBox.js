import React, { Component} from 'react'
import styled from 'styled-components'

const TNameContainer = styled.div`
  margin: 5px;
  @media (max-width:500px) {
    width: 90%;
  }
`

class TNameBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false
    }
  }
  toggleClass(on) {
    this.setState({
      animate: on
    })
  }
  render() {
    const {
      tid, checkTournament, checked, name, getMatchesFromTournaments
    } = this.props

    return (
      <TNameContainer
        className={`pretty p-default animated ${this.state.animate ? 'pulse' : null}`}
        onMouseEnter={this.toggleClass.bind(this, true)}
        onMouseLeave={this.toggleClass.bind(this, false)}
      >
        <input
          type="checkbox"
          id={tid}
          onClick={(e) => {
            checkTournament(tid, e.target.checked)
            getMatchesFromTournaments()
          }}
          checked={checked}
        />
        <div className="state p-success">
          <label htmlFor={tid}> {name}</label>
        </div>
      </TNameContainer>
    )
  }
}

export default TNameBox
