import React from 'react';
import { Pressable, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraPage from './components/CameraPage';
import styled from 'styled-components/native';
	
const HomeContainer = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	/* align-items: center; */
`;
const Title = styled.Text`
	font-size:35px;
	color: palevioletred;
	padding: 10px;
`;

const GoToDetailsButton = styled.Pressable`
	/* width: 50vw; */
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px 100px 10px 100px;
`

	function HomeScreen({ navigation }) {
		return (
			<HomeContainer>
				 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Title>Ready to Rock n Roll?</Title>
			<GoToDetailsButton
			 onPress={() => navigation.navigate('Details')}>
			 <Text> Yes! </Text>
			</GoToDetailsButton>
		  </View>
		  </HomeContainer>
		);
	  }

	  function DetailsScreen({ navigation }) {
		return (
		  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Button
			  title="Go to Camera"
			  onPress={() => navigation.navigate('Camera')}
			/>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
			{/* <Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
			  title="Go back to first screen in stack"
			  onPress={() => navigation.popToTop()}
			/> */}
		  </View>
		);
	  }

	  function CameraScreen({ navigation }) {
		return (
			<>
			<CameraPage/>
			</>
		)
	  } 
	
	const Stack = createNativeStackNavigator();
	
	const App = () => {
		return (
			<NavigationContainer>
			  <Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen name="Camera" component={CameraScreen} />
			  </Stack.Navigator>
			</NavigationContainer>
		  );
		}
	
	export default App;
	