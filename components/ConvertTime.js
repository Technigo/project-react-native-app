import React from 'react'
import styled from 'styled-components/native'

 const ConvertTime = ({mins}) => {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return (
  <TimeText>{hours}h {minutes}m</TimeText>
  )
}

export default ConvertTime

const TimeText = styled.Text`
color: #BDBDBD;
padding: 5px;
`