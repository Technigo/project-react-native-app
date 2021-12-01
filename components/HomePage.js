import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';

import styled from 'styled-components/native';

const HomePage = () => {
	return (
		<HomeContainer>
			<HeaderText>Welcome to Randomizer!</HeaderText>
			<DescriptionText>
				Movies are hard to choose. 
				So many are released into theaters or for rental every week. 
				A random movie selection probably isn't any better or worse than your choosing. 
				Disregard Rotten Tomatoes and other film review sites and evolve to our method 
				of random movie selection.
			</DescriptionText>
			<MovieImage source={require("../assets/clapperboard.png")} />
			<HandImage source={require("../assets/hand.png")} />
		</HomeContainer>
	);
};

export default HomePage;

const HomeContainer = styled.View`   
	flex: 1;
	background-color: black;   
	justify-content: flex-start;
	align-items: center;
	text-align: center;
`;

const HeaderText = styled.Text`
	color: white; 
	font-size: 30px;
	font-weight: bold;
	margin: 20px auto;
`;

const DescriptionText = styled.Text`
	color: white; 
	font-size: 20px;
	text-align: center;
	padding: 30px;
`;

const MovieImage = styled.Image`
	width: 200px;
	height: 200px;
	margin: 20px auto;
`;

const HandImage = styled.Image`
	width: 100px;
	height: 100px;
	margin: 10px auto;
`;