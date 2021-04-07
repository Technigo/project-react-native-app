import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

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
    fetch('https://dulce-affirmations-api.herokuapp.com/affirmation')
      .then (response => response.json())
      .then ((json) => { 
        setMessage(json[0])       
      });
  },[]);

    return(
      <>
        <Title>Your daily affirmation card</Title>
        <OracleText>{message.phrase}</OracleText>
        <OracleImage source={require('../assets/card.png')} />
      </>
    )
}

export default AffirmationMessage