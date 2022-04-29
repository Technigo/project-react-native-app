import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

import Header from './components/Header';
import ActivityApi from './components/ActivityApi';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAF6F6',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}, 
})

const App = () => {
	return (
		<View style={styles.container}>
			<Header/>
			<ActivityApi/>
		</View>
	);
};

export default App;
