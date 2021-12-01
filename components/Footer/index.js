import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	background-color: wheat;
	justify-content: center;
	align-items: center;
    width: 100%;
    height: 32px;
    flex: 0.5;
    margin-top: 20px;
    flex-direction: row;
`;

const ButtonQuestion = styled.TouchableOpacity`
	font-size: 24px;
    margin: auto;
    text-align: center;
    background-color: wheat;
    border-radius: 10px;
`;

const ButtonText = styled.Text`
	font-size: 18px;
    padding: 15px;
    text-align: center;
    color: #444444;
    font-weight: bold;
`;

const Image = styled.Image`
    width: 50;
    height: 50;
    margin: 10px;
`;

const Footer = ({ text, sign, navigation, direction }) => {

    return (
        <Container>
            <ButtonQuestion onPress={() => navigation.navigate(direction)}>
                <ButtonText>{`${sign} ${text}`}</ButtonText>
            </ButtonQuestion>
            {/* <Image
                source={require('../../assets/question.jpeg')}
            /> */}
        </Container>
    );
};

export default Footer;