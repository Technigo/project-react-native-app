import React from 'react'
import styled from 'styled-components/native';
import { SensorComponent } from './SensorComponent'


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const OracleImage = styled.Image`
  width: 400px;
  height: 400px;
  margin-right: 50px;
  `
const HomeScreen = () => {
      return(

  <Container>
    <Title>Your daily affirmation card</Title>
    <OracleImage source={require('../assets/fortune-card.png')} />
    <Title>Shake me to shuffle the cards</Title>
    <SensorComponent></SensorComponent>
  </Container>

  )
      }

export default HomeScreen