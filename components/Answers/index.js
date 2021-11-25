import React from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import Instructions from '../Instructions';
import Lottie from "react-lottie";
import animationData from '../../lotties/speak-and-talk.json';
import Concentrate from '../Concentrate';

const Container = styled.View`
	background-color: black;
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
    flex: 1.5;
`;

const Title = styled.Text`
	font-size: 24px;
	color: yellow;
`;

const AnswerContainer = styled.View`
    background: red;
    width: 70%;
    height: auto;
    margin: 3rem auto;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Answer = styled.Text`
	font-size: 24px;
    height: auto;
    margin: 2rem auto;
    text-align: center;
    color: white;
`;


const Answers = ({ answer, navigation }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    console.log("from Answers component", answer)
    return (
        <Container>
            {answer ?
                <>
                    <TitleContainer>
                        <Title>Zoltar says</Title>
                    </TitleContainer>
                    <Lottie options={defaultOptions} height={150} width={200} />
                    <AnswerContainer>
                        <Answer>{answer}</Answer>
                    </AnswerContainer>
                    <Instructions instructions={"Ask again and shake your"} />
                </> :
                <Concentrate />}
            <Footer text={"Don't know what to ask for?"} sign={">"} navigation={navigation} direction={'Randomquestions'} />
        </Container>
    );
};

export default Answers;