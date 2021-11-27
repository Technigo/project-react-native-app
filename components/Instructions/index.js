import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background: gray;
    margin: 24px 0;
    width: 80%;
    height: auto;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
	font-size: 17px;
	color: wheat;
    margin: 10px;
    font-style: italic;
    font-family: Merienda;
    flex-wrap: wrap;
`;

const Instructions = ({ instructions }) => {
    return (
        <Container>
            <Text>{instructions}</Text>
        </Container>
    );
};

export default Instructions;