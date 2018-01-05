import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #242124;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    background-color: Whitesmoke;
    padding: 10px;
    font-color: black;
    :visited {
      font-color: black;
    }
  }
`

const Footer = () => (
  <Container>
    <Link to="home">Home</Link>
    <Link to="/">Stats</Link>
  </Container>
)

export default Footer
