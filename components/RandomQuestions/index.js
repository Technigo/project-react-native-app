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
    flex: 1.5;
`;

const Image = styled.Image`
   borderRadius: 10;
    width: 250;
    height: 200;
    flex: 1.5;
    margin-top: 10px;
`;

const QuestionsContainer = styled.View`
    background: #D9D9D9;
    width: 80%;
    height: auto;
    margin: 40px auto 20px auto;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 0.7;
`;

const Questions = styled.Text`
	font-size: 24px;
    height: auto;
    margin: 8px auto;
    text-align: center;
    color: black;
`;

const ButtonQuestion = styled.TouchableHighlight`
	font-size: 24px;
    margin: 20px auto 40px auto;
    text-align: center;
    background-color: #CF3030;
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
            {!randomQuestion && <Instructions instructions={"Get some inpiration about what to ask to Zoltar"} />}

            <Image
                source={require('../../assets/zoltar-white.jpg')}
            />

            {randomQuestion && <QuestionsContainer>
                <Questions>{randomQuestion}</Questions>
            </QuestionsContainer>}

            <ButtonQuestion onPress={() => getRandomElement()}>
                <ButtonText>Inspiration please</ButtonText>
            </ButtonQuestion>



            <Footer text={"I know what to ask for!"} sign={"<"} navigation={navigation} direction={'Answers'} />
        </Container>
    );
};

export default RandomQuestions;