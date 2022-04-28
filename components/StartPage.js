import React from 'react';
import styled from 'styled-components/native';
import { ButtonApi } from "./ButtonApi";
import { ShakeApi } from './ShakeApi';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import 'react-native-gesture-handler';

function HomeScreen({ navigation }) {

    const Wrapper = styled.View`
	flex: 1;
    background-color:#E4C2C1;
    
`


	const APIButton=styled.TouchableOpacity`
	font-weight:700;
	width:40%;
	margin:auto;
	text-align:center;
	
	background-color:#B6666F;
	margin-bottom: 10px;
	margin-top: 40px;
	padding:10px;
	color:white;
	border-radius:5px;
	`
	const ButtonText = styled.Text`
	font-size: 18px;
	color: white;
    text-align:center;
    font-weight:700
`;



	return (
	  <Wrapper style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	
		     <APIButton onPress={() => navigation.navigate('Find something to do')}>
        <ButtonText>Find something to do!</ButtonText>

        </APIButton>
		<APIButton onPress={() => navigation.navigate('Pick a drink')}>
        <ButtonText>Pick a drink!</ButtonText>

        </APIButton>
		
	  </Wrapper>
	);
  }
  

  
  const Drawer = createDrawerNavigator();



export const StartPage = () => {

	
	
	return (
		<NavigationContainer>
		<Drawer.Navigator initialRouteName="Find something todo">
		  
		  <Drawer.Screen name="Home" component={HomeScreen} />
		  <Drawer.Screen name="Find something to do" component={ButtonApi} />
		  <Drawer.Screen name="Pick a drink" component={ShakeApi} />
		</Drawer.Navigator>
	   </NavigationContainer>

	
		
		
	);
};


