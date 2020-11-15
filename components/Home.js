import React from 'react'
import {Button, Platform} from 'react-native'
import LottieView from 'lottie-react-native'

import {Banner, BannerImage, HeaderContainer,} from './Style/StyleHome'
import { Footer } from './Footer'
import logo from '../assets/live.png'

export const Home = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate('LatestNews')
  }
  
  return (
    <HeaderContainer>
      {Platform.OS !== 'web' && 
      <LottieView
        source={require('../assets/breakingNews.json')}
        loop
        autoPlay
        style={{ width: 200, height: 200 }}
      />}
      <BannerImage source={logo}/>
      <Banner>// BREAKING NEWS //</Banner>
      <Button title='Tap for Latest News' onPress={pressHandler}></Button>
      <Footer />
    </HeaderContainer>
  )
}
