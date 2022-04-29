import React, {useState, useEffect} from "react";
import { Share } from "react-native";
import styled from "styled-components/native"
import { ActivityHeader } from "./ActivityHeader";

const APIButton=styled.TouchableOpacity`
  font-weight:700;
  width:40%;
  margin:auto;
  text-align:center;
  background-color:#B6666F;
  margin-bottom: 30px;
  margin-top: 20px;
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

  const [activity, setActivity]=useState({})
  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey! I have an idea for a ${activity.type} activity for you! ${activity.activity} !`,
        title: `I have an acticity tip for you!`,
        
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

const generateActivity=()=>{

  fetch("https://www.boredapi.com/api/activity")
  .then(response=>response.json())
  .then(data=>setActivity(data))

}

  useEffect(()=>{generateActivity()}, [])

  const something=activity.type==="recreational"||activity.type==="social"

  return(
    <Wrapper>
      <Container>
        <ActivityHeader/>
          <APIButton onPress={generateActivity}>
            <ButtonText>Hit me up!</ButtonText>
          </APIButton>{something?
            <Title>💥How about trying something {activity.type}?</Title>:
            <Title>💥How about trying some {activity.type}?</Title>}
            <Title>👉🏼 For exampel: {activity.activity}!</Title>
          <APIButton onPress={onShare}>
            <ButtonText>Share this activity</ButtonText>
          </APIButton>
      </Container>
    </Wrapper>
  )
}