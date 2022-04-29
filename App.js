import React from 'react';
import { StyleSheet, View } from 'react-native'

import Start from './components/Start';
import ActivityApi from './components/ActivityApi';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#C5DECD',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
})


const App = () => {

	return (
		<View style={styles.container}>
			<Start />
			<ActivityApi />
		</View>
	);
};

export default App;
