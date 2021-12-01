import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const HomeContainer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const Home = () => {
	return (
		<HomeContainer>
			<Text>Home Screen</Text>
		</HomeContainer>
	);
};

// If I want to use a button to toggle the dreawer I can add navigation as a prop and add this button:
// <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
