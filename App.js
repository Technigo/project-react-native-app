import React from 'react';
import Start from './components/Start';
import Answers from './components/Answers';
import RandomQuestions from './components/RandomQuestions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Merienda_400Regular, Merienda_700Bold } from '@expo-google-fonts/merienda';

const Stack = createNativeStackNavigator();

{/* Two ways to write the component with and without props, so I'll keept it for academic reasons */ }
const App = () => {
	const [fontsLoaded] = useFonts({
		Merienda_400Regular,
		Merienda_700Bold,
	});

	const headerStyle = {
		backgroundColor: '#444444',
	}

	const headerTitleStyle = {
		fontWeight: 'bold',
		fontFamily: 'Merienda_700Bold',
		fontSize: 24,
	}

	if (!fontsLoaded) {
		return <></>
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Magic Zoltar"
					component={Start}
					options={{
						title: 'Magic Zoltar',
						headerStyle: headerStyle,
						headerTintColor: 'wheat',
						headerTitleStyle: headerTitleStyle,
					}} />
				<Stack.Screen
					name="Answers"
					component={Answers}
					options={{
						title: 'Magic Zoltar',
						headerStyle: headerStyle,
						headerTintColor: 'wheat',
						headerTitleStyle: headerTitleStyle,
					}}
				/>
				<Stack.Screen
					name="Randomquestions"
					options={{
						title: 'I know what to ask for!',
						headerStyle: headerStyle,
						headerTintColor: 'wheat',
						headerTitleStyle: headerTitleStyle,
					}}>
					{(props) => <RandomQuestions {...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer >
	);
}

export default App;
