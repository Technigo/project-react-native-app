import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

import InputField from './components/InputField'


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		justifyContent: 'center',
		alignItems: 'center'
	}, 
	title: {
		fontSize: 24,
		color: 'blue'	
	}
})

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Dictionary</Text>
			<Text style={styles.title}>📚📖📚</Text>
			<InputField/>
		</View>
	);
};

export default App;
