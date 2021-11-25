import React from 'react';
import styled from 'styled-components/native';
import Header from '../Header';

const Container = styled.View`
	background-color: black;
	justify-content: center;
	align-items: center;
    font-family: Merienda;
    margin: 1rem 0;
    width: 80%;
    height: auto;
    flex: 5;
`;

const ImageGif = styled.Image`
    borderRadius: 10px;
    margin: 2rem auto;
`;

const Title = styled.Text`
	font-size: 24px;
	color: wheat;
    margin: 1rem auto;
`;

const StartButton = styled.Button`
`;

const Start = ({ navigation }) => {
    return (
        <Container>
            <Header />
            <ImageGif
                style={{ width: 250, height: 250, marginBottom: 20, fontSize: 24 }}
                source={require('../../assets/zultar.gif')} />
            <Title>Do you want to know your fortune?</Title>
            <StartButton
                title="Tap to ask"
                color="red"
                onPress={() => navigation.navigate('Answers')}
            />
        </Container>
    );
};

export default Start;