import React from 'react'
import styled from 'styled-components/native';
import { SensorComponent } from './SensorComponent'


const Container = styled.View`
  flex: 1;
  background-color: thistle;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold
  color: #833471;
  margin: -20px;
`

const OracleImage = styled.Image`
  width: 450px;
  height: 450px;
  margin-left: 50px;
  `

const HomeScreen = ({navigation}) => {
  return(
    <Container>
      <Title>Are you bored?</Title>
      <OracleImage source={require('../assets/bored.png')} />
      <Title>Shake me to to get inspired</Title>
      <SensorComponent navigation={navigation}/>
    </Container>
  )
}


export default HomeScreen
