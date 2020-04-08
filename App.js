import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Button } from 'react-native';
import styled from 'styled-components/native';
import Weather from './components/Weather';
import Compass from './components/Compass';
import Heading from './components/Heading';
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
			<ScrollView contentContainerStyle={styles.scroll}>
				<ImageBackground source={require('./assets/ForestBackground.jpg')} style={styles.imageBackground}>
					<Heading />
					<Compass />
					{(myCord.latitude !== 0 || myCord.longitude !== 0) && <Weather myCord={myCord} />}
          <MyLocation myCord={myCord} setMyCord={setMyCord} />
				</ImageBackground>
			</ScrollView>
		</Container>
	);
};

export default App;

const styles = StyleSheet.create({
	scroll: {
		height: 1200,
		width: 400,
		flexGrow: 1,
		justifyContent: 'center'
	},
	imageBackground: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	}
});
