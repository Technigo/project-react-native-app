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
    flex: 8;
`;

const Concentrate = ({ answer }) => {

    return (
        <Container>
            <Instructions instructions={"Concentrate, ask your question and shake your phone"} />
        </Container>
    );
};

export default Concentrate;