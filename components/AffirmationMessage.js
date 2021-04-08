import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.Text`
flex: 1;
background-color: papayawhip;
justify-content: center;
align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
const OracleText = styled.Text`
color: black;
`
const OracleImage = styled.Image`
  width: 400px;
  height: 400px;
  margin-right: 50px;
  `
const AffirmationMessage = () => {

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
        <Title>Your daily affirmation card</Title>
        <OracleImage source={require('../assets/activity.png')} />
        <OracleText>{message.activity}</OracleText>
        </Container>
      </>
    )
}

export default AffirmationMessage