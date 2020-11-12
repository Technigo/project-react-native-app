import React from 'react'
import styled from 'styled-components/native'
import {SafeAreaView, ScrollView, Button } from 'react-native'

import { LatestNews } from './components/LatestNews'

import logo from './assets/live.png'

const Banner = styled.Text`
  font-size: 30px
  fontWeight: 900
  color: palevioletred
  textAlign: center
  marginBottom: 20px
`
const App = () => {
  return (
    <SafeAreaView>
      <BannerImage 
          style={{
            resizeMode: "contain",
            height: 100,
            width: 100
          }}  
          source={logo}/>
      <Banner>// BREAKING NEWS //</Banner>
      <ScrollView>
        <LatestNews/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const BannerImage = styled.Image`

`
