import React from 'react'; 
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const DateBox = styled.View`
  width: 100%;
  flex: 0.3;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
`

const Info = styled.Text`
  font-size: 20px;
  color: white;
`

 export const DateLine = ({sol, solData}) => {
  if (!solData) {
    return <Text>Loading...</Text>
  }

  const date = solData.First_UTC;
  const dateShort = date.slice(0,10)

  return (
    <DateBox>
      <Info>
        Sol {sol}
      </Info>
      <Info>
        {dateShort}
      </Info>
    </DateBox>
  )
};
