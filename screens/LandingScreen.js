import React from 'react';
import styled from 'styled-components/native';

import { SensorComponent } from '../components/SensorComponent';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Heading = styled.Text`
  font-size: 40px;
  color: #ffffff;
`;

const SubHeading = styled.Text`
  font-size: 30px;
  color: #ffffff;
`


const LandingScreen = ({ gotQuote, handleFetch }) => {
  return (
    <Container>
      {!gotQuote && (
        <>
          <Heading>Welcome to the realm</Heading>
          <SubHeading>Raise your sword swiftly and you will receive wisdom</SubHeading>
        </>
      )}
      <SensorComponent
        onFetch={handleFetch}
        gotQuote={gotQuote}
      >
      </SensorComponent>
    </Container>
  );
};

export default LandingScreen;

