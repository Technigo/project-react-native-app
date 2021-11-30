import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraPage from './components/CameraPage';
	

	function HomeScreen({ navigation }) {
		return (
		  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
			  title="Go to Details"
			  onPress={() => navigation.navigate('Details')}
			/>
		  </View>
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
	