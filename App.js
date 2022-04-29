import React from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";
import { ScrollView, ImageBackground } from 'react-native'
import Cat from './assets/cat.jpg'
import { useFonts, Teko_400Regular } from '@expo-google-fonts/teko'
import AppLoading from 'expo-app-loading'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  height: 100px;
  justify-content: center;
  padding: 5px;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 100px;
`

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`

const App = () => {

  let [fontsLoaded] = useFonts({
    Teko_400Regular,
  })
  
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ImageBackground
      source={Cat}
      style={{ width: 390, height: 850 }}
      resizeMode='cover'
      > 
      <Container>
        <ScrollView>
          <Container>
            <Header>
              <Title 
                style={{ fontFamily: 'Teko_400Regular', 
                fontSize: 40 }}>SHAKE FOR A CAT FACT</Title>
            </Header>
            <SensorComponent />
          </Container>
        </ScrollView>
      </Container>
    </ImageBackground>
    
  );
};

export default App;

