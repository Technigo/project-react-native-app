import React from "react"
import {Button, Image, View, Text} from 'react-native'
import styled from "styled-components/native"


export default function NewPage() {
  return (
    <View>
      <Image
          style={{width: 150, height: 150}}
          source={require('./assets/intro-1572462010.jpg')}
        />
        <Text>
        </Text>
        <Button title="Sort Me!">Sort me!</Button>
      
    </View>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  height: 50;
  width: 50;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
