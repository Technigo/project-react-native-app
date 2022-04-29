import React from 'react';
import { StyleSheet, View } from 'react-native'

import Start from './components/Start';
import ActivityApi from './components/ActivityApi';


const App = () => {

	return (
		<View style={styles.container}>
			<Start />
			<ActivityApi />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EDFDE5',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
})

export default App;
