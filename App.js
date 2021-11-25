import React, { useState } from 'react';
import styled from 'styled-components/native';
import Start from './components/start';
import Header from './components/Header';
import Answers from './components/Answers';
import RandomQuestions from './components/RandomQuestions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Container = styled.View`
	background: wheat;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: Merienda;
	height: 100vh;
`;

const Stack = createNativeStackNavigator();

const App = () => {
	const [answer, setAnswer] = useState("Maybe today")
	const [question, setQuestion] = useState({
		question: "Do I have toothpaste on my sweater?",
		answer: "Signs point to yes"
	})

	return (
		<NavigationContainer>

			<Container>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						name="Home"
						component={Start}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="Answers"
						options={{ title: 'Magic Zoltar' }} >
						{(props) => <Answers {...props} answer={answer} />}
					</Stack.Screen>

					<Stack.Screen
						name="Randomquestions"
						options={{ headerShown: false }} >
						{(props) => <RandomQuestions {...props} question={question} />}
					</Stack.Screen>
				</Stack.Navigator>
			</Container>
		</NavigationContainer>
	);
};

export default App;
