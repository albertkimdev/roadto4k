import React from 'react'
import styled from 'styled-components'

const TNameContainer = styled.div`
  margin: 5px;
  @media (max-width:500px) {
    width: 90%;
  }
`

const TNameBox = ({
  tid, checkTournament, checked, name, getMatchesFromTournaments
}) => (
  <TNameContainer className="pretty p-default">
    <input
      type="checkbox"
      id={tid}
      onClick={(e) => {
        checkTournament(tid, e.target.checked)
        getMatchesFromTournaments()
      }}
      checked={checked}
    />
    <div className="state p-success">
      <label htmlFor={tid}> {name}</label>
    </div>
  </TNameContainer>
)

export default TNameBox
