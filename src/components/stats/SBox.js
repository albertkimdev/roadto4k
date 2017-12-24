import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 45%;
  align-items: center;
`

class SBox extends Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        SBOX
      </Container>
     )
  }
}

export default SBox
