import React from 'react';
import styled from 'styled-components/native';
import Footer from '../Footer';
import Instructions from '../Instructions';


const Container = styled.View`
	background-color: black;
	justify-content: space-around;
	align-items: center;
    font-family: Merienda;
    margin: 16px 0;
    width: 85%;
    height: auto;
    flex: 3;
`;

const Image = styled.Image`
    borderRadius: 10;
    width: 250;
    height: 250;
    flex: 1.5;
`;


const Concentrate = () => {

    return (
        <Container>
            <Instructions instructions={"Concentrate, ask your question and shake your phone"} />
            <Image
                source={require('../../assets/zultar-card.jpeg')}
            />
        </Container>
    );
};

export default Concentrate;