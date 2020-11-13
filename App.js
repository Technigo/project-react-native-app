import React from 'react';
import StepCounter from './Components/StepCounter';

// for future use rember this; npm install --save styled-components, frickin awesome. Important to rember to use /native or else errormessages will appear. //
import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  background-color: 'rgb(255, 255, 255)';
  justify-content: flex-end;
  align-items: center;
  `

const Section = styled.View`
  margin-bottom: 30px;
`

const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 24px;
  color: #0000;
`

const App = () => {
  return (
    <Container>
      <Section>
        <Title>
          Stepcounter time !!!
        </Title>
        <StepCounter />
      </Section>
    </Container>
  )
}

export default App;