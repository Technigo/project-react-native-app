import React from 'react';
import Start from './components/Start';
import Answers from './components/Answers';
import RandomQuestions from './components/RandomQuestions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

{/* This way to write the component let me use props, so I'll keept it for academic reasons */ }
const App = () => {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Magic Zoltar"
					component={Start}
					options={{
						title: 'Magic Zoltar',
						headerStyle: {
							backgroundColor: '#444444',
						},
						headerTintColor: 'wheat',
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 24,
						},
					}} />
				<Stack.Screen
					name="Answers"
					component={Answers}
					options={{
						title: 'Magic Zoltar',
						headerStyle: {
							backgroundColor: '#444444',

						},
						headerTintColor: 'wheat',
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 24,
						},
					}}
				>
				</Stack.Screen>

				<Stack.Screen
					name="Randomquestions"
					options={{
						title: 'I know what to ask for!',
						headerStyle: {
							backgroundColor: '#444444',
							fontSize: 24,
						},
						headerTintColor: 'wheat',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}>
					{(props) => <RandomQuestions {...props} />}
				</Stack.Screen>

			</Stack.Navigator>
		</NavigationContainer >
	);
}

export default App;
