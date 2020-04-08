import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Button } from 'react-native';
import styled from 'styled-components/native';
import { Weather } from './components/Weather';
import { Compass } from './components/Compass';
import { Heading } from './components/Heading';
import MyNewLocation from './components/MyNewLocation';
import MyLocation from './components/MyLocation';

const Container = styled.View`
	flex: 1;
	background-color: black;
	justify-content: center;
	align-items: center;
`;

const App = () => {
	const [ myCord, setMyCord ] = useState({ latitude: 0, longitude: 0 });
	const [ count, setCount ] = useState(0);
	return (
		<Container>
			<ScrollView contentContainerStyle={styles.children}>
				<ImageBackground source={require('./assets/ForestBackground.jpg')} style={styles.image}>
					<Heading />
					<MyNewLocation myCord={myCord} setMyCord={setMyCord} count={count} />
					<Compass />
					{(myCord.latitude !== 0 || myCord.longitude !== 0) && <Weather myCord={myCord} />}
				</ImageBackground>
			</ScrollView>
		</Container>
	);
};

export default App;

const styles = StyleSheet.create({
	children: {
		height: 1500,
		width: 400,
		flexGrow: 1,
		justifyContent: 'center'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	}
});
