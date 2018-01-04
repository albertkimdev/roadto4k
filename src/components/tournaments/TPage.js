import React, { Component } from 'react'
import styled from 'styled-components'
import TFilters from './TFilters'
import TDisplay from './TDisplay'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class TPage extends Component {
  render() {
    return (
      <Container>
        <h1>Select Tournaments</h1>
        <TDisplay />
        <TFilters />
      </Container>
    )
  }
}

export default TPage
