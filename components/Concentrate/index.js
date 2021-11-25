import React from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import Instructions from '../Instructions';
import Lottie from "react-lottie";
import animationData from '../../lotties/meditating-monkey.json';

const Container = styled.View`
	background-color: black;
	justify-content: space-around;
	align-items: center;
    font-family: Merienda;
    margin: 1rem 0;
    width: 85%;
    height: auto;
    flex: 8;
`;

const Concentrate = ({ answer }) => {
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
            <Instructions instructions={"Concentrate, ask your question and shake your phone"} />
            <Lottie options={defaultOptions} height={300} width={250} />
        </Container>
    );
};

export default Concentrate;