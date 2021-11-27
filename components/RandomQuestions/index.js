import React from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import Instructions from '../Instructions';

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

const QuestionsContainer = styled.View`
    background: gray;
    width: 80%;
    height: auto;
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 2;
`;

const Questions = styled.Text`
	font-size: 24px;
    height: auto;
    margin: 8px auto;
    text-align: center;
    color: white;
`;

const RandomQuestions = ({ question, navigation }) => {

    return (
        <Container>
            <TitleContainer>
                <Title>Zoltar says to you: </Title>
            </TitleContainer>

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