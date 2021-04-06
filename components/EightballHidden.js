import React from 'react'
import styled from 'styled-components/native'

const EightContainer = styled.View`
  width: 140px;
  height: 140px;
  background-color: #FFF;
  border-radius: 140;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const Eight = styled.Text`
  color: #000;
  font-size: 85px;
  font-weight: bold;
`

const EightballHidden = () => {

  return (
    <EightContainer>
        <Eight>8</Eight>
    </EightContainer>
  )
}

export default EightballHidden
