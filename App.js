import React from 'react'
import styled from 'styled-components/native'
import{ TouchableOpacity, Button  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 25px;
  color: palevioletred;
`

const BtnText = styled.Text`
  font-size: 25px;
  color: white;
  text-align: center
`

const InfoText = styled.Text`
  font-size: 18px;
`
const Btn = styled.TouchableOpacity`
  background-color: pink;
  height: 40px;
`

const HomeScreen = ({ navigation }) => {
  return (
    <>
    <StyledView>
      <Title>Home Page</Title>
    </StyledView>
    <Btn
      title="More info"
      onPress={() => navigation.navigate('Details')}> 
      <BtnText>More Details</BtnText>
      </Btn>
    </>
  )
}

const DetailsScreen = () => {

  return (
    <StyledView>
      <InfoText>Some info of some sort</InfoText>
    </StyledView>
  )
  
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App

  
