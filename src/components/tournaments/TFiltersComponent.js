import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 70%;
  display: flex;
  padding: 15px 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width:600px) {
    width: 90%;
  }
  form {
    width: 100%;
  }
`
const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  div {
    background-color: Whitesmoke;
    padding: 5px;
    border: 1px solid black;
  }
`

class TFiltersComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'pg',
      pg: false,
      total: false
    }
  }

  handleOptionChange(e) {
    this.setState({
      selected: e.target.value
    })
    this.props.selectStatsFilter(e.target.value)
  }

  toggleClass(option, on) {
    this.setState({
      [option]: on
    })
  }

  printFilterOptions() {
    return (
      <form>
        <RadioGroup>
          <div
            className={`animated ${this.state.pg ? 'pulse' : null}`}
            onMouseEnter={this.toggleClass.bind(this, 'pg', true)}
            onMouseLeave={this.toggleClass.bind(this, 'pg', false)}
          >
            <input type="radio" id="pg" name="filter" value='pg'
              checked={this.state.selected === 'pg'}
              onChange={this.handleOptionChange.bind(this)}
            />
            <label htmlFor="pg"> Per Game</label>
          </div>
          <div
            className={`animated ${this.state.total ? 'pulse' : null}`}
            onMouseEnter={this.toggleClass.bind(this, 'total', true)}
            onMouseLeave={this.toggleClass.bind(this, 'total', false)}
          >
            <input type="radio" id="total" name="filter" value='total'
              checked={this.state.selected === 'total'}
              onChange={this.handleOptionChange.bind(this)}
            />
            <label htmlFor="total"> Total Stats</label>
          </div>
        </RadioGroup>
      </form>
    )
  }

  render() {
    return (
      <Container>
        {this.printFilterOptions()}
      </Container>
    )
  }
}

export default TFiltersComponent
