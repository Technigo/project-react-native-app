import React from 'react'
import styled from 'styled-components/native'
import {SafeAreaView, ScrollView, Image, Text, View } from 'react-native'

import { LatestNews } from './components/LatestNews'

import logo from './assets/live.png'


const App = () => {
  return (
    <SafeAreaView>
      <BannerImage source={logo}/>
      <Banner>// BREAKING NEWS //</Banner>
      <ScrollView>
        <LatestNews/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const Banner = styled.Text`
  font-size: 30px
  fontWeight: 900
  color: palevioletred
  textAlign: center
  marginBottom: 20px
`

const BannerImage = styled.Image`
  paddingLeft: 20px
`
