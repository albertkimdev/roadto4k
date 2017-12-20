import React, { Component } from 'react'
import TFilters from './TFilters'
import TDisplay from './TDisplay'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class TPage extends Component {
  render() {
    return (
      <Container>
        <h1>Tournament filters</h1>
        <TFilters />
        <TDisplay />
      </Container>
    )
  }
}

export default TPage
