import React from 'react';
import { Pressable, Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraPage from './components/CameraPage';
import styled from 'styled-components/native';
import ApiFetch from './components/APIFetch';
import Quotes from './components/Quotes';
import { useFonts, Princess_Sofia } from '@expo-google-fonts/princess-sofia';

const image = { uri: "https://images.pexels.com/photos/4021523/pexels-photo-4021523.jpeg?auto=compress&cs=tiny" };

// const fonts = useFonts({
//     Princess_Sofia,
//   });

const HomeContainer = styled.View`
	flex: 1;
	background-color: darkslateblue;
	justify-content: center;
	/* align-items: center; */
`;
const Title = styled.Text`
	/* font-size:70px;	 */
	color: whitesmoke;
	padding: 10px;
	text-shadow: 2px 2px;
	text-align: center;
	/* font-family: princess_sofia; */
`;

const GoToDetailsButton = styled.Pressable`
	/* width: 50vw; */
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    background-color: slateblue;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 30px 100px 30px 100px;
`
	const ButtonTextHome = styled.Text`
		color: white;
		font-weight: 600;
		font-size: 22px;
		/* text-shadow: 1px 1px; */
`
const ImageBackgroundDetails = styled.ImageBackground`
	flex: 1;
	justify-content: center;
`;

const TitleDetails = styled.Text`
	font-size:35px;
	/* color: lightgoldenrodyellow; */
	padding: 10px;
    color: white;
	line-height: 30px;
    font-weight: bold;
    text-align: center;
    background-color: #483D8Bc0;
	object-fit: cover;

	.span {
		page-break-before: always;
		/* font-style: italic; */
	}
`;

const GoToCameraButton = styled.Pressable`
	/* width: 50vw; */
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: white;
    background-color: aqua;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px 100px 10px 100px;
`

const HomeButton = styled.Pressable`
	/* width: 50vw; */
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: white;
    background-color: aqua;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px 100px 10px 100px;
	alignItems: center;
`

	function HomeScreen({ navigation }) {
		return (
			<HomeContainer>
				<ImageBackground source={image} resizeMode="cover">
				 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			 <Title style={{ fontFamily: 'princess-sofia', fontSize: 35 }}>Ready to Cinderella?</Title>
			<GoToDetailsButton
			 onPress={() => navigation.navigate('Details')}>
			 <ButtonTextHome> Yes! </ButtonTextHome>
			</GoToDetailsButton>
		  </View>
		  </ImageBackground>
		  </HomeContainer>
		);
	  }

	  function DetailsScreen({ navigation }) {
		return (
		  <ImageBackgroundDetails source={image} resizeMode="cover">
			  <View style={{ flex: 1, justifyContent: 'center' }}>
			<TitleDetails>{Quotes[Math.floor(Math.random() * Quotes.length)]} <span> ― Cinderella</span> </TitleDetails>
			<GoToCameraButton
			  onPress={() => navigation.navigate('Camera')}>
			<Text>
			Go to Camera
			</Text>
			</GoToCameraButton>
			<HomeButton onPress={() => navigation.navigate('Home')} >
				<Text>
				Go to Home
				</Text> 
			</HomeButton>
			{/* <Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
			  title="Go back to first screen in stack"
			  onPress={() => navigation.popToTop()}
			/> */}
		  </View>
		  </ImageBackgroundDetails>
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
	