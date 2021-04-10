import React from 'react';
import styled from 'styled-components/native';

import { GenerateGotQuote } from '../components/GenerateGotQuote';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Heading = styled.Text`
  font-size: 40px;
  color: #ffffff;
  font-family: trajanus;
  text-align: center;
`;

const SubHeading = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-family: trajanus;
  text-align: center;
  margin-top: 40px;
`;

const LandingScreen = ({ gotQuote, handleFetch }) => {
  return (
    <Container>
      {!gotQuote && (
        <>
          <Heading>Welcome to the realm</Heading>
          <SubHeading>Raise your sword swiftly and you will receive wisdom</SubHeading>
        </>
      )}
      
      <GenerateGotQuote
        onFetch={handleFetch}
        gotQuote={gotQuote}
      >
      </GenerateGotQuote>
    </Container>
  );
};

export default LandingScreen;

