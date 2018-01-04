import React, { Component } from 'react'
import styled from 'styled-components'
import TPage from './tournaments/TPage'
import SPage from './stats/SPage'

const Container = styled.div`
  min-height: 100vh;
`

class StatisticsPage extends Component {
  render() {
    return (
      <Container className="silverLake">
        <TPage />
        <SPage />
      </Container>
    )
  }
}

export default StatisticsPage
