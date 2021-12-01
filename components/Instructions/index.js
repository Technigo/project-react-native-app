import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background: #D9D9D9;
    margin: 50px 0;
    width: 80%;
    height: auto;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const Text = styled.Text`
	font-size: 17px;
	color: #E88A1A;
    margin: 10px;
    font-style: italic;
    font-family: Merienda;
    flex-wrap: wrap;
    text-align: center;
`;

const Instructions = ({ instructions }) => {
    return (
        <Container>
            <Text>{instructions}</Text>
        </Container>
    );
};

export default Instructions;