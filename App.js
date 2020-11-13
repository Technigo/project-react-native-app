import React from 'react'
import styled from 'styled-components/native'
import {SafeAreaView, ScrollView,} from 'react-native'
// import LottieView from 'lottie-react-native'

import { LatestNews } from './components/LatestNews'

import logo from './assets/live.png'

const Banner = styled.Text`
  font-size: 30px
  fontWeight: 900
  color: palevioletred
  textAlign: center
  marginBottom: 20px
`
const BannerImage = styled.Image`
  alignItems: center
`
const HeaderContainer = styled.View`
alignItems: center
background: rgb(219,228,238)
`
const App = () => {
  return (
    <SafeAreaView>
      <HeaderContainer> 
        <BannerImage 
          style={{
            resizeMode: "contain",
            height: 50,
            width: 50
          }}  
          source={logo}/>
        {/* <LottieView source={require('./assets/diwali.json')} autoPlay loop /> */}
        <Banner>// BREAKING NEWS //</Banner>
      </HeaderContainer>
      <ScrollView>
        <LatestNews/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App


