import React from 'react'; 
import {Text} from 'react-native'
import styled from 'styled-components'

import {DateBox} from './styled/DateBox'

 export const DateLine = ({sol, solData}) => {
  if (!solData) {
    return <Text>Loading...</Text>
  }
  return (
    <DateBox>
      <Text>
        Sol {sol}
      </Text>
      <Text>
        {solData.First_UTC}
      </Text>
    </DateBox>
  )
};

