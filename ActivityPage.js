import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: #cdead8;
`

const ActivityText = styled.Text`
font-size: 40px;
color: #dc1010;
font-weight: bold;
text-align: center;
margin-bottom: 230;
font-family: 'Inter-Black';
color: #8dc1a9;
letter-spacing: -1;
margin-left: 25;
margin-right: 25;
`

const BackText = styled.Text`
font-size: 18px;
color: white;
font-family: 'Inter-Bold';
`

const BackView = styled.View`
background-color: #8dc1a9;
margin-bottom: 50;
border-radius: 2;
padding-top: 20;
padding-bottom: 20;
padding-left: 60;
padding-right: 60;
shadow-color: lightgray;
shadow-radius: 2;
shadow-opacity: 0.3;
shadow-offset: 8px 8px;
`

export const ActivityPage = ({ route, navigation }) => {
  let [fontLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
  })
  const { activity } = route.params

  if (!fontLoaded) {
    return <AppLoading />
  } else {

    return (
      <Container>
        <ActivityText>{activity}</ActivityText>
        <TouchableOpacity
          title="Something else"
          onPress={() => navigation.goBack()}>
          <BackView><BackText>BACK</BackText></BackView>
        </TouchableOpacity>
      </Container>
    )
  }
}

