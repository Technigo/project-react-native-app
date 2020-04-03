import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function Header({ title, titleTwo }) {
	const View = styled.View`
		width: 100%;
		padding: 25px 0;
		background-color: beige;
		border-radius: 5px;
	`;

	const Text = styled.Text`
		font-size: ${(props) => (props.title ? '30px' : '20px')};
		text-align: center;
	`;

	return (
		<View>
			<Text title>{title}</Text>
			<Text>{titleTwo}</Text>
		</View>
	);
}
