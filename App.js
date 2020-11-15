import React, { useState } from 'react';
import styled from 'styled-components/native';

import CharacterRandomizer from './CharacterRandomizer';

const Container = styled.View`
	flex: 1;
	background-color: #443423;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: #dbc3a0;
	margin-top: 50px;
`;

const StyledImage = styled.Image`
	width: 300px;
	height: 300px;
	margin: 10px;
	border-radius: 12px;
`;

const StyledButton = styled.Button`
	font-size: 24px;
	color: palevioletred;
	background-color: #dbc3a0;
	margin: 10px;
`;

const image = { uri: 'https://picsum.photos/id/1028/200/300' };

const App = () => {
	const [showRandomCharacter, setShowRandomCharacter] = useState(false);
	const [hideWelcomeScreen, setHideWelcomeScreen] = useState(false);

	const handlePress = () => {
		setShowRandomCharacter(true);
		setHideWelcomeScreen(true);
	};

	const handleRefresh = () => {
		setShowRandomCharacter(false);
		setHideWelcomeScreen(false);
	};
	return (
		<Container>
			{!hideWelcomeScreen && (
				<Container>
					<Title>Swedish RPG character-randomizer</Title>
					<StyledImage source={image} />
					<StyledButton title={'Start your adventure!'} onPress={handlePress} />
				</Container>
			)}
			{showRandomCharacter && (
				<Container>
					<CharacterRandomizer />
					<StyledButton
						title={'Make another random character!'}
						onPress={handleRefresh}
					/>
				</Container>
			)}
		</Container>
	);
};

export default App;
