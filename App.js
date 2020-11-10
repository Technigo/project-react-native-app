import React from 'react'
import styled from 'styled-components/native'
import {SafeAreaView, ScrollView, Image, Text, View } from 'react-native'

import { LatestNews } from './components/LatestNews'


const App = () => {
  return (
    <SafeAreaView>
      {/* <BannerImage source={Banner} resizeMode={'cover'}/> */}
      <Banner>BREAKING NEWS</Banner>
      <ScrollView>
        <LatestNews/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App


const Banner = styled.Text`
  font-size: 24px
  color: palevioletred
  textAlign: center
`

const BannerImage = styled.Image`
  height: 100px
  width: 100%
`