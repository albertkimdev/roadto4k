import React, { Component } from 'react'
import TPage from './tournaments/TPage'
import SPage from './stats/SPage'
import styled from 'styled-components'

class StatisticsPage extends Component {
  render() {
    return (
      <div>
        <TPage />
        <SPage />
      </div>
    )
  }
}

export default StatisticsPage
