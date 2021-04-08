import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

//styled components 
const Container = styled.View`
  flex: 1;
  background-color: thistle;
  justify-content: center;
  align-items: center;
  `

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: teal;
`
const OracleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #833471;
  margin: 10px;
  `
const OracleImage = styled.Image`
  width: 400px;
  height: 300px;
  margin-left: 40px;
  `
const JokeText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #833471
`
const RestartButton = styled.TouchableOpacity`
  background-color: #833471;
  border-radius: 10px;
  padding:20px;
  margin-top: 40px
`

const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #f2f0f0;
  `

const AffirmationMessage = ({navigation}) => {

  const [message, setMessage] = useState({});

  useEffect (()=> { 
    fetch('http://www.boredapi.com/api/activity/')
      .then (response => response.json())
      .then ((json) => { 
        setMessage(json)       
      });
  },[]);

    return(
      <>
        <Container>
          <OracleText><Title>You can:</Title> {message.activity}...</OracleText>
          <OracleImage source={require('../assets/activity.png')} />
          <JokeText> I also sense that you need a dad joke?👇</JokeText>
          <RestartButton onPress={() => navigation.navigate('Joke')}>
            <ButtonText>Joke</ButtonText>
          </RestartButton>
        </Container>
      </>
    )
}

export default AffirmationMessage