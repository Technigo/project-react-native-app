import React from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import Instructions from '../Instructions';
import Lottie from "react-lottie";
import animationData from '../../lotties/big-brother-watching.json';

const Container = styled.View`
	background-color: black;
    border-radius: 10px;
	justify-content: space-around;
	align-items: center;
    font-family: Merienda;
    margin: 1rem 0;
    width: 85%;
    height: auto;
    flex: 1;
`;

const TitleContainer = styled.View`
    margin: 2rem auto;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    flex: 1;

`;

const Title = styled.Text`
	font-size: 24px;
	color: yellow;
`;

const QuestionsContainer = styled.View`
    background: black;
    width: 80%;
    height: auto;
    margin: 2rem auto;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 2;
`;

const Questions = styled.Text`
	font-size: 24px;
    height: auto;
    margin: 0.5rem auto;
    text-align: center;
    color: white;
`;

const RandomQuestions = ({ question, navigation }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Container>
            <TitleContainer>
                <Title>Magic Zoltar</Title>
            </TitleContainer>

            <Lottie options={defaultOptions} height={150} width={150} />
            {question && <QuestionsContainer>
                <Questions>{question.question}</Questions>
                <Questions>{question.answer}</Questions>
            </QuestionsContainer>}

            <Instructions instructions={"Shake your phone to see random questions and answers from Zoltar"} />
            <Footer text={"I know what to ask for!"} sign={"<"} navigation={navigation} direction={'Answers'} />
        </Container>
    );
};

export default RandomQuestions;