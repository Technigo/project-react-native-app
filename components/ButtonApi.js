import React, {useState, useEffect} from "react";
import { Share, Button, View, Text, Touchabelopacity, Image } from "react-native";
import styled from "styled-components/native"
import { Header } from "./Header";

const APIButton=styled.TouchableOpacity`
font-weight:700;
width:40%;
margin:auto;
text-align:center;

background-color:#B6666F;
margin-bottom: 10px;
margin-top: 40px;
padding:10px;
color:white;
border-radius:5px;
`



const Title = styled.Text`
	font-size: 24px;
  
	color: palevioletred;
    text-align:center;
    margin-bottom:30px;
`;
const ButtonText = styled.Text`
	font-size: 18px;
	color: white;
    text-align:center;
    font-weight:700
`;
const Container = styled.View`
	flex: 1;
   
	justify-content: center;
	align-items: center;
    text-align:center;
    margin:30px;
    
`;
const Wrapper = styled.View`
	flex: 1;
    background-color:#E4C2C1;
    

	
    
`;



export const ButtonApi=()=>{
const [quote, setQuote]=useState({})

const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey! I have an idea for a ${quote.type} activity for you! ${quote.activity} !`,
        title: `${quote.activity}!`,
        
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };





const generateQuote=()=>{

fetch("https://www.boredapi.com/api/activity")
.then(response=>response.json())
.then(data=>setQuote(data))

}




useEffect(()=>{generateQuote()}, [])



const something=quote.type==="recreational"||quote.type==="social"

return(
        <Wrapper>
        <Container>
        <Header/>
        {something?
        <Title>💥How about trying something {quote.type}?</Title>:<Title>💥How about trying some {quote.type}?</Title>}
        <Title>👉🏼 For exampel: {quote.activity}!</Title>
        <APIButton onPress={generateQuote}>
        <ButtonText>Hit me up!</ButtonText>
        </APIButton>
        <APIButton onPress={onShare}>
        <ButtonText>Share this activity</ButtonText>

        </APIButton>
        </Container>
    </Wrapper>
)



}