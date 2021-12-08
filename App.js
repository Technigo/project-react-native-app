import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native"

import ButtonApi from "./components/ButtonApi"

export default function App() {
	const [count, setCount] = useState(0);

	return (
    <View style={styles.container}>
    	<ButtonApi /> 
		<Text style={styles.counterText}> {count}</Text>
    </View>
	);
}
//trying out Stylesheet for styling
const styles = StyleSheet.create({
	container: {
    flex: 1,
	backgroundImage: 'URL(https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)',
    backgroundColor: "powderblue",
    alignItems: "center",
	justifyContent: "center",
    paddingTop: 60,
    color: "darkblue",
	},

	counterText: {
    color: "black",
    padding: "20",
	fontSize: "34",
	},
});
