import React from 'react';
import styled from 'styled-components/native';
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import ShakeAnswer from './components/ShakeAnswer'


const image = { uri: "https://cpng.pikpng.com/pngl/s/22-226237_magic-eight-ball-magic-8-ball-clipart.png"};


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	image: {
	  flex: 1,
	  justifyContent: "center",
	},
	text: {
	  color: "white",
	  fontSize: 30,
	  textAlign: "center",
	  backgroundColor: "#000000c0",
	  fontWeight: "bold",
	},
	SmallText: {
		color: 'white',
		textAlign: "center",
		backgroundColor: "#000000c0",
	}, SmallViewSecond: {
		height: 20,
		backgroundColor: "#000000c0",
	},
	SmallView: {
		height: 20,
		backgroundColor: "#000000c0",
	}
  })

const App = () => {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMode='cover' style={styles.image}>
			        <View style={styles.SmallView}></View>
					<Text style={styles.SmallText}>pssst...shake me</Text>
					<View style={styles.SmallViewSecond}></View>
					<Text style={styles.text}>Here is your answer:</Text>
			<ShakeAnswer />
			</ImageBackground>
		</View>
	);
};

export default App;

// const Container = styled.View`
// 	flex: 1;
// 	background-color: papayawhip;
// 	justify-content: center;
// 	align-items: center;
// `