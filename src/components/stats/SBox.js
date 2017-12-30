import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: center;
  background-color: orange;
  margin: 10px;
  @media (max-width:500px) {
    width: 90%;
  }
`
const Cont = styled.div`
  display: flex;
  flex-direction: row;
  p {
    margin: 5px;
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
       <p>{name}</p>
        {ranks.map((r, i) => (
          <Cont key={i}>
            <p>{`${i + 1}. ${r.player.name}`}</p>
            <p>{r[name]}</p> {/* r[name] is like r.assists or r.deaths name is variable */}
          </Cont>
        ))}
      </Container>
     )
  }
}

export default SBox
