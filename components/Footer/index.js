import React from 'react';
import styled from 'styled-components/native';
import Lottie from "react-lottie";
import animationData from '../../lotties/avatar-icon.json';

const Container = styled.View`
	background-color: red;
	justify-content: center;
	align-items: center;
    width: 100%;
    height: 2rem;
    flex: 1.5;
    margin-top: 1rem;
`;

const GotoRandomButton = styled.Button`
	font-size: 24px;
	color: white;
`;

const Footer = ({ text, sign, navigation, direction }) => {
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
            <GotoRandomButton
                title={`${sign}  ${text}`}
                color="black"
                onPress={() => navigation.navigate(direction)}
            />
            <Lottie options={defaultOptions} height={50} width={50} />
        </Container>
    );
};

export default Footer;