import React, { useState, useEffect } from 'react';
import Start from './components/Start';
import Answers from './components/Answers';
import RandomQuestions from './components/RandomQuestions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { API_URL } from './utils/url'

const Stack = createNativeStackNavigator();

const App = () => {

	const [answer, setAnswer] = useState("")
	const [question, setQuestion] = useState({
		question: "Do I have toothpaste on my sweater?",
		answer: "Signs point to yes"
	})

	const fetchAnswer = () => {
		let params = encodeURIComponent("placeholder");
		fetch(API_URL(params))
			.then(res => res.json())
			.then(json => {
				setAnswer(json.magic.answer)
			}).catch((error) => {
				console.log('Error in Fetch:' + error.message);
			});
	}

	useEffect(fetchAnswer, [])

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Magic Zoltar"
					component={Start}
					options={{
						title: 'Magic Zoltar',
						headerStyle: {
							backgroundColor: '#f4511e',
							fontSize: 24,
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}} />
				<Stack.Screen
					name="Answers"
					options={{
						title: 'Magic Zoltar',
						headerStyle: {
							backgroundColor: '#f4511e',
							fontSize: 24,
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				>
					{(props) => <Answers {...props} answer={answer} />}
				</Stack.Screen>

				<Stack.Screen
					name="Randomquestions"
					options={{
						title: 'I know what to ask for!',
						headerStyle: {
							backgroundColor: '#f4511e',
							fontSize: 24,
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}>
					{(props) => <RandomQuestions {...props} question={question} />}
				</Stack.Screen>

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
