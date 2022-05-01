import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const DOG_URL = 'https://dog.ceo/api/breed/samoyed/images/random'

const DogScreen = () => {

	const [dogImage, setDogImage] = useState({})

	const getDogImage = () => {
		fetch(DOG_URL)
		  .then(response => response.json())
		  .then(data => {
			  console.log(data.message)
			  setDogImage(data.message)
		  })
	}

	useEffect(() => {
		getDogImage()
	}, [])


	return (
		<View style={styles.container}>
			<Text style={styles.title}>A random samoyed!</Text>
            {dogImage && 
                <Image source={{ uri: dogImage}} style={styles.image} />
            }
			<Button onPress={getDogImage} title="Update image" />	
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'papayawhip',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		color: 'palevioletred'
	},
	image: {
		width: 66,
		height: 66
	}
})

export default DogScreen;
