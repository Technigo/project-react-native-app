import React from 'react'
import styled from 'styled-components/native'

import {SafeAreaView, ScrollView, Text, View } from 'react-native'
import { LatestNews } from './components/LatestNews'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  return (
    <SafeAreaView>
      <Title>This is your cool app!</Title>
      <Title>Go to App.js and start coding</Title>
      <Title>💅💅💅</Title>
      <ScrollView>
      <LatestNews/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
