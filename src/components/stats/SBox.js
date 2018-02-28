import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SPlayerRow from './SPlayerRow'
import { statsDisplay } from '../constants'

const Container = styled.div`
  display: flex;
  width: 45%;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  background-color:	#F5F5F5;
  border: 1px solid rgba(0,0,0,0.1);
  margin: 10px;
  padding-bottom: 5px;

  -webkit-box-shadow: 2px 10px 29px -5px rgba(0,0,0,0.39);
  -moz-box-shadow: 2px 10px 29px -5px rgba(0,0,0,0.39);
  box-shadow: 2px 10px 29px -5px rgba(0,0,0,0.39);

  @media (max-width:500px) {
    width: 90%;
  }
`

class SBox extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }

  render() {
    const data = Object.entries(this.props.data)
    const name = data[0][0]
    const ranks = data[0][1]
    return (
      <Container>
        <h3>{statsDisplay[name]}</h3>
        {ranks.map((r, i) => (<SPlayerRow key={i} i={i} r={r} name={name} />))}
      </Container>
    )
  }
}

export default SBox
