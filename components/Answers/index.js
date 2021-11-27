import React from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import Instructions from '../Instructions';
import Concentrate from '../Concentrate';

const Container = styled.View`
	background-color: black;
	justify-content: space-around;
	align-items: center;
    font-family: Merienda;
    width: 100%;
    flex: 1;
`;

const TitleContainer = styled.View`
    margin: 10px auto;
    text-align: center;
    justify-content: center;
    flex: 1;
    background-color: gray;
`;

const Title = styled.Text`
	font-size: 24px;
	color: yellow;
`;

const AnswerContainer = styled.View`
    background: red;
    width: 70%;
    height: auto;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Answer = styled.Text`
	font-size: 24px;
    height: auto;
    margin: 32px auto;
    text-align: center;
    color: white;
`;


const Answers = ({ answer, navigation }) => {

    console.log("from Answers component", answer)
    return (
        <Container>
            {answer ?
                <>
                    <TitleContainer>
                        <Title>Zoltar says</Title>
                    </TitleContainer>
                    <AnswerContainer>
                        <Answer>{answer}</Answer>
                    </AnswerContainer>
                    <Instructions instructions={"Ask again and shake your phone"} />
                </> :
                <Concentrate />}
            <Footer text={"Don't know what to ask for?"} sign={">"} navigation={navigation} direction={'Randomquestions'} />
        </Container>
    );
};

export default Answers;