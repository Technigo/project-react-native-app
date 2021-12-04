import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import GotApi from "./components/GotApi";

const mapImage = {
	uri: "https://images.unsplash.com/photo-1515255384510-23e8b6a6ca3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
};

const App = () => {
	return (
		<ImageBackground
			source={mapImage}
			resizeMode="cover"
			style={styles.background}
		>
			<GotApi />
		</ImageBackground>
	);
};

export default App;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: "grey",
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		fontSize: 24,
		color: "rgba(245, 222, 179, 0.8)",
	},
});
