import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

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
