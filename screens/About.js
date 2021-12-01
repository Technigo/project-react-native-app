import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

// This is the main container for this screen
const AboutContainer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const About = () => {
	return (
		<AboutContainer>
			<Text>About Screen</Text>
		</AboutContainer>
	);
};
