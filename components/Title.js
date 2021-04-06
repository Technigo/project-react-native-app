import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

export const Title = (props) => {


  return(
    <View>
      <Title>
        {props.name}
      </Title>
    </View>

  )
}

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`