import React from 'react';
import StepCounter from './Components/StepCounter';
import { Icon } from 'react-native-elements';

// for future use rember this; npm install --save styled-components, frickin awesome. Important to rember to use /native or else errormessages will appear. //
import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: 'rgb(245, 245, 220);
`

const Section = styled.View`
  margin-bottom: 20px;
  align-items: center;
`

const Title = styled.Text`
  margin-bottom: 90px;
  font-size: 24px;
  font-weight: 600;
  color: 'rgb(0, 0, 0)';
`


const App = () => {
  return (
    <Container>
      <Section>
        <Title>
          STEPOMETER
        </Title>
        <Icon name='md-walk' type='ionicon' color='darkblue' size='200px' />
        <StepCounter />
      </Section>
    </Container>
  );
};

export default App;