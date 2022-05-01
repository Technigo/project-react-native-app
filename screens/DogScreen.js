import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import StyledButton from '../components/StyledButton'

import { Colors } from '../assets/colors'

const DOG_URL = 'https://dog.ceo/api/breed/samoyed/images/random'

const DogScreen = () => {

	const [dogImage, setDogImage] = useState(null)

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
		backgroundColor: Colors.grain,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 34,
        fontWeight: 'bold',
		color: Colors.blackboard
	},
	image: {
		width: 200,
		height: 200,
        margin: 40,
        borderRadius: 200 / 2
	}
})

export default DogScreen
