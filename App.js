import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

import Header from './components/Header';
import ActivityApi from './components/ActivityApi';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
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
