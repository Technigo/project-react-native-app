import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native';
import {Share, TouchableOpacity} from 'react-native';




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
    
     
    const shareAdvice = async () => {
      try {
        await Share.share({
          message:advice
        })
      } catch (error) {
        console.log(error)
      }
    }
  
 
    
  
    return (
      <Container>
        <TopContainer>
          <Title>Random Advice Giver</Title>
        </TopContainer>
      <AdviceContainer>
      <Text>{advice}</Text>
      <Title>💡💡💡</Title>
      </AdviceContainer>
      <BottomContainer>
       <TouchableOpacity
            onPress={shareAdvice}
            color="#841584"
            accessibilityLabel="Try the advice giver"><Text>SHARE</Text>
       </TouchableOpacity>
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
  
