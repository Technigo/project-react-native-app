import React from 'react';
import styled from 'styled-components/native';
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
    borderRadius: 10px;
    width: 250px;
    height: 250px;
    flex: 8;
`;


const Concentrate = () => {

    return (
        <Container>
            <Instructions instructions={"Concentrate, ask your question and shake your phone"} />
            <Image
                source={require('../../assets/zoltar-card.jpeg')}
            />
        </Container>
    );
};

export default Concentrate;