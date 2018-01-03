import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'

const Cont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.5px solid black;
  font-size: 1.2em;
  p {
    margin: 5px;
    padding: 3px;
  }
`
const PValue = styled.p`
  text-align: right;
`

const SPlayerRow = ({ i, r, name }) => (
  <Cont>
    <p>{`${i+1}. ${r.player.name}`}</p>
    <PValue>{numeral(r[name]).format('0,000,000,000.0')}</PValue> {/* r[name] is like r.assists or r.deaths name is variable */}
  </Cont>
)

export default SPlayerRow
