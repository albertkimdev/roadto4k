import React from 'react'
import styled from 'styled-components'

const TNameContainer = styled.div`
  background-color: grey;
  margin: 5px;
  padding: 5px;
  @media (max-width:500px) {
    width: 90%;
  }
`

const TNameBox = ({
  tid, checkTournament, checked, name, getMatchesFromTournaments
}) => (
  <TNameContainer>
    <input
      type="checkbox"
      id={tid}
      onClick={(e) => {
        checkTournament(tid, e.target.checked)
        getMatchesFromTournaments()
      }}
      checked={checked}
    />
    <label htmlFor={tid}>{name}</label>
  </TNameContainer>
)

export default TNameBox
