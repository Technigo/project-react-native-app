import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native';



const HomeScreen = () => {
    const [ advice, setAdvice] = useState([]);
  
    useEffect(()=> {
      fetchAdvice();
    },);

    const API_URL='https://api.adviceslip.com/advice'
  
    const fetchAdvice = () => {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
      .catch(err => console.log(err)); 
    }
  
  
  
    return (
      <Container>
        <TopContainer>
          <Title>Random Advice Giver</Title>
          {/*<Button
            onPress={onPressShowAdvice}
            title="Try me!"
            color="#841584"
            accessibilityLabel="Try the advice giver"
          />*/}
        </TopContainer>
      <AdviceContainer>
      <Text>{advice}</Text>
      <Title>💡💡💡</Title>
      </AdviceContainer>
      <BottomContainer>
      <Text>Share</Text>
      </BottomContainer>  
      </Container>
    )
  }
  
  export default HomeScreen
  
  /* Styling*/
  
  const Container = styled.View`
  flex: 1;
  `
  
  const TopContainer = styled.View`
    flex: 3;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
  `
  const AdviceContainer = styled.View`
    flex: 3;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
  `
  const BottomContainer = styled.View`
    flex: 3;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
  `
  
  const Title = styled.Text`
    font-size: 24px;
    color: palevioletred;
    justify-content: center;
    align-items: center;
  `
  
  const Text = styled.Text`
    font-size: 24px;
    color: palevioletred;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding-bottom: 16px;
  `
  /*const ButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
  `;*/