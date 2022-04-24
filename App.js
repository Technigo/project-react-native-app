import React from "react"
import { StyleSheet, View } from "react-native"
import Header from "./components/Header" 
import Counter from "./components/Counter"

export default function App() {
	return (
		<View style={styles.container}>
		<Header title="Hello" />
		<Counter />
		<Header title="Goodbye" />
		</View>
	)
}


//Styled components
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FBECCA",
		alignItems: "center",
		justifyContent: "space-around"
	},
})
