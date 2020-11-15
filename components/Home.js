import React from 'react'
import {View, Button} from 'react-native'
import {Banner, BannerImage, HeaderContainer,} from './Style/StyleHome'
import logo from '../assets/live.png'
export const Home = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate('LatestNews')
  }
  return (
    <>
    <HeaderContainer>
      <BannerImage 
        style={{
          resizeMode: 'contain',
          height: 50,
          width: 50
        }}  
        source={logo}/>
      {/* <LottieView source={require('./assets/diwali.json')} autoPlay loop /> */}
      <Banner>// BREAKING NEWS //</Banner>
      <Button title='Tap for Latest News' onPress={pressHandler}></Button>
    </HeaderContainer>
    {/* <Footer /> */}
    </>
  )
}