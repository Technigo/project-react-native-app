import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import StyledButton from '../components/StyledButton';

const DOG_URL = 'https://dog.ceo/api/breed/samoyed/images/random'

const DogScreen = () => {

	const [dogImage, setDogImage] = useState({})

	const getDogImage = () => {
		fetch(DOG_URL)
		  .then(response => response.json())
		  .then(data => {
			  setDogImage(data.message)
		  })
	}

	useEffect(() => {
		getDogImage()
	}, [])


	return (
		<View style={styles.container}>
			<Text style={styles.title}>Samoyed randomizer!</Text>
            {dogImage && 
                <Image source={{ uri: dogImage}} style={styles.image} />
            }
             <StyledButton title="Update image" onPress={getDogImage} />
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
		fontSize: 34,
		color: 'palevioletred'
	},
	image: {
		width: 150,
		height: 150,
        margin: 40,
        borderRadius: 150 / 2
	}
})

export default DogScreen;
