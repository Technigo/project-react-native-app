import React from 'react';
import styled from 'styled-components/native';
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import ShakeAnswer from './components/ShakeAnswer'


const image = { uri: "https://cpng.pikpng.com/pngl/s/22-226237_magic-eight-ball-magic-8-ball-clipart.png"};


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: "center",
	  alignItems: 'center',
	  backgroundColor: 'black'
	},
	title: {
		color: 'white',
		paddingBottom: 100,
		fontSize: 40,
	},
	image: {
	  flex: 1,
	  justifyContent: "center",
	  width: '100%',
	  borderBottomLeftRadius: 300,
	  borderBottomRightRadius: 300,
	  borderTopLeftRadius: 300,
	  borderTopRightRadius: 300,
	  overflow: 'hidden',
	},
	text: {
	  color: "white",
	  fontSize: 30,
	  textAlign: "center",
	  fontWeight: "bold",
	},
	SmallText: {
		color: 'white',
		textAlign: "center",
	}, SmallViewSecond: {
		flex: 1,
		alignItems: 'center',
		justifyContent: "center",
	},
	SmallView: {
		height: 20,
	}
  })

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>MAGIC 8-BALL</Text>
			<View style= {{width: '100%', height: '50%',  alignItems: 'center'}}>
				<ImageBackground source={image} resizeMode='cover' style={styles.image}>
						<View style={styles.SmallView}></View>
						<View style={styles.SmallViewSecond}>
						<Text style={styles.SmallText}>pssst...shake me</Text>
						<Text style={styles.text}>Here is your answer:</Text>
						</View>
				<ShakeAnswer />
				</ImageBackground>
			</View>
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