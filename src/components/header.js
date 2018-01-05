import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 75px;
  background-color: turquoise;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding-right: 15px;
`
const Title = styled.div`
  flex: 2;
  margin-left: 30px;
`

const Header = () => (
  <Container>
    <Title>
      <h3>Road to 4k</h3>
    </Title>
    <MenuContainer>
      <Link to="home">Home</Link>
      <Link to="/">Stats</Link>
    </MenuContainer>
  </Container>
)

export default Header
