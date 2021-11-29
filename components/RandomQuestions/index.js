import React, { useState } from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import Instructions from '../Instructions';
import questions from '../../utils/questions.json'

const Container = styled.View`
	background-color: black;
	justify-content: space-around;
	align-items: center;
    font-family: Merienda;
    width: 100%;
    flex: 1;
`;

const TitleContainer = styled.View`
    margin: 32px auto;
    text-align: center;
    justify-content: center;
    flex: 0.5;
    background-color: black;
    width: 70%;
`;

const Title = styled.Text`
	font-size: 18px;
	color: gray;
    text-align: center;
`;

const QuestionsContainer = styled.View`
    background: gray;
    width: 80%;
    height: auto;
    margin: 50px auto;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Questions = styled.Text`
	font-size: 24px;
    height: auto;
    margin: 8px auto;
    text-align: center;
    color: white;
`;

const ButtonQuestion = styled.TouchableHighlight`
	font-size: 24px;
    margin: 50px auto;
    text-align: center;
    background-color: red;
    border-radius: 10px;
`;

const ButtonText = styled.Text`
	font-size: 24px;
    padding: 15px;
    text-align: center;
    color: white;
`;

const RandomQuestions = ({ navigation }) => {
    const [randomQuestion, setRandomQuestion] = useState(null)

    const getRandomElement = () => {
        const randomElement = questions.questions[Math.floor(Math.random() * questions.questions.length)];
        setRandomQuestion(randomElement.question)
    }

    return (
        <Container>
            <TitleContainer>
                <Title>
                    What people ask before you to Zoltar?
                </Title>
            </TitleContainer>

            {randomQuestion && <QuestionsContainer>
                <Questions>{randomQuestion}</Questions>
            </QuestionsContainer>}

            <ButtonQuestion onPress={() => getRandomElement()}>
                <ButtonText>Ask to Zoltar</ButtonText>
            </ButtonQuestion>


            {!randomQuestion && <Instructions instructions={"Tap the button to see random questions to ask Zoltar"} />}
            <Footer text={"I know what to ask for!"} sign={"<"} navigation={navigation} direction={'Answers'} />
        </Container>
    );
};

export default RandomQuestions;