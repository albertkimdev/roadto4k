import React, { Component } from 'react'
import styled from 'styled-components'
import numeral from 'numeral'

const Cont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  background-color: ${props => props.darker ? '#E8E8E8': null};
  p {
    margin: 5px;
    padding: 3px;
    font-family: 'Cormorant Garamond', serif;
  }
`
const PValue = styled.p`
  text-align: left;
  font-size: 1.2em;
`

class SPlayerRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pulse: false
    }
  }
  toggleClass(on) {
    this.setState({ pulse: on })
  }
  render() {
    const { i, r, name } = this.props

    if (i % 2 === 0) {
      return (
        <Cont
        darker
          className={`animated ${this.state.pulse ? 'pulse' : null}`}
          onMouseEnter={this.toggleClass.bind(this, true)}
          onMouseLeave={this.toggleClass.bind(this, false)}
        >
          <p><b>{`${i + 1}. ${r.player.name}`}</b></p>
          <p>{`${r.totalGames} games`}</p>
          <PValue>
            <b>{numeral(r[name]).format('0,000,000,000.0')}</b>
          </PValue> {/* r[name] is like r.assists or r.deaths name is variable */}
        </Cont>
      )
    }
    return (
      <Cont
        className={`animated ${this.state.pulse ? 'pulse' : null}`}
        onMouseEnter={this.toggleClass.bind(this, true)}
        onMouseLeave={this.toggleClass.bind(this, false)}
      >
        <p>{`${i + 1}. ${r.player.name}`}</p>
        <p>{`${r.totalGames} games`}</p>
        <PValue>
          {numeral(r[name]).format('0,000,000,000.0')}
        </PValue> {/* r[name] is like r.assists or r.deaths name is variable */}
      </Cont>
    )
  }
}

export default SPlayerRow
