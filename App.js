import React from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import ShakeAnswer from './components/ShakeAnswer'


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
		fontFamily: "monospace"
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
	  fontSize: 25,
	  textAlign: "center",
	  fontWeight: "bold",
	  fontFamily: "monospace"
	},
	SmallText: {
		color: 'white',
		textAlign: "center",
		fontFamily: "monospace"
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
				<ImageBackground source={require('./assets/8-ball.png')} resizeMode='contain' style={styles.image}>
						<View style={styles.SmallView}></View>
						<View style={styles.SmallViewSecond}>
						<Text style={styles.SmallText}>pssst...shake me!</Text>
						<Text style={styles.text}>Here is your answer:</Text>
						</View>
				<ShakeAnswer />
				</ImageBackground>
			</View>
		</View>
	);
};

export default App
