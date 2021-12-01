import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';

import styled from 'styled-components/native';

const HomePage = () => {
	return (
		<HomeContainer>
			<HeaderText>Welcome to Randomizer!</HeaderText>
			<DescriptionText>
				To choose a movie can be hard sometimes. If you'are having troubles to find Movies are hard to choose. 
				Slide to the right to get a random movie for the Friday night! 
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
	margin: 20px auto;
`;