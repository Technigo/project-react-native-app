import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native'

import Start from './components/Start'
import Header from './components/Header';


const App = () => {
	return (
		<ScrollView style={styles.wrapper}>
		<Header />
		<Start />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
wrapper: {
	backgroundColor: 'yellow',
}
})

export default App;
