import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background-color: black;
	align-items: center;
    margin: 1.5rem 0;
    width: 100%;
    height: auto;
    flex: 0.5;
`;

const Text = styled.Text`
	font-size: 20px;
	color: wheat;
    margin: 1rem auto;
    font-style: italic;
    justify-content: center;
    font-family: Merienda;
`;

const Instructions = ({ instructions }) => {
    return (
        <Container>
            <Text>{instructions}</Text>
        </Container>
    );
};

export default Instructions;