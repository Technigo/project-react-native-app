import React from "react"
import { ImageBackground, StyleSheet, View, } from "react-native"

import ButtonApi from "./components/ButtonApi"

const image = { uri: "https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" };

export default function App() {
	return (
    	<View style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
			<ButtonApi />
      		</ImageBackground>
    		
		</View>
	);
}
//trying out Stylesheet for styling, for the first time
const styles = StyleSheet.create({
	container: {
    flex: 1,
	width: "auto",
    alignItems: "center",
	justifyContent: "center",
    paddingTop: 60,
    color: "darkblue",
	},

	text: {
    color: "darkblue",
    padding: 20,
	fontSize: 10,
	},

	image: {
		flex: 1,
		justifyContent: "center"
	}
});
