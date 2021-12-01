import React from "react";
import styled from "styled-components/native";
// import { createDrawerNavigation } from ''
// import {Navigation } from ''

import ButtonApi from "./components/ButtonApi";

const Container = styled.View`
	flex: 1;
	background-color: grey;
	background-image: url("https://images.unsplash.com/photo-1515255384510-23e8b6a6ca3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80");
	background-repeat: no-repeat;
	background-size: cover;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: rgba(245, 222, 179, 0.8);
	text-shadow: 2px 2px 8px #000000;
`;

const App = () => {
	return (
		<Container>
			{/* ev ta in så man har två flikar och kan visa knapp med citat och bilder med skak */}
			{/* <Title>On average, these people know more than John Snow</Title> */}
			<ButtonApi />
		</Container>
	);
};

export default App;
