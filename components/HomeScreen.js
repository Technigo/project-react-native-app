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
  `
  const HomeScreen = ({navigation}) => {
    return(

<Container>
  <Title>Are you bored?</Title>
  <OracleImage source={require('../assets/oracle.png')} />
  <Title>Shake me to to get inspired</Title>
  <SensorComponent navigation={navigation}/>
</Container>

)
}



export default HomeScreen
