import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import StartScreen from './screens/StartScreen';
import DogScreen from './screens/DogScreen';
import GameScreen from './screens/GameScreen';

const App = () => {

	return (
		<>
		<StartScreen />
		<DogScreen />
		<GameScreen />
		</>
	);
};



export default App;
