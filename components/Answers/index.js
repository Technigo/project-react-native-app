import React from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import { SensorComponent } from '../SensorComponent';

const Container = styled.View`
	background-color: black;
	justify-content: space-around;
	align-items: center;
    font-family: Merienda;
    width: 100%;
    flex: 1;
`;

const Answers = ({ navigation }) => {

    return (
        <Container>
            <SensorComponent />
            <Footer text={"Don't know what to ask for?"} sign={">"} navigation={navigation} direction={'Randomquestions'} />
        </Container>
    );
};

export default Answers;