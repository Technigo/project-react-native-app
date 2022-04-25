import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ArtworkList from './components/Artworklist';

const App = () => {
	return (
		<View style={styles.container}>
			<Text>Rembrandt</Text>
			<ArtworkList />
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'papayawhip',
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default App;
