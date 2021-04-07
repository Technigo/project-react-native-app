import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const Title = styled.Text`
  font-size: 34px;
  color: palevioletred;
`

export const AppTitle = (props) => {


  return(
    <View>
      <Title>
        {props.name}
      </Title>
    </View>

  )
}

