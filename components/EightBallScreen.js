import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import backgroundImage from "../assets/background.jpg";
import { Text, TextInput, Button, View } from "react-native";
//import { Accelerometer } from "expo-sensors";

const EightBallContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: 60px;
`;

const AnswerText = styled.Text`
  font-size: 16px;
  color: white;
 
`;

const QuestionText = styled.Text`
  font-size: 18px;
  color: white;
`;

const QuestionContainer =styled.View`
align-items: center;
`;

export const EightBallScreen = ({ navigation, route }) => {

        const [answer, setAnswer] = useState()
        const [question, setQuestion] = useState()
    

        let params = encodeURIComponent("{question}");
        let uri = "https://8ball.delegator.com/magic/JSON/" + params;
       
        useEffect(() => {
            fetch(uri)
                .then(response => response.json())
                .then(json => {
                    setAnswer(json.magic.answer);
                });
        }, []);
       


  return (
    <EightBallContainer source={backgroundImage} >
    
        <QuestionContainer>
            <QuestionText> What would you like to ask the magic Eight Ball ? </QuestionText>
            
            <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', color:'white', borderWidth: 1 }}
                onChangeText={text => setQuestion(text)}
                value={question}
            /> 
            
            <Button
                title="Submit question" 
                onPress={() => setAnswer(answer)}
            />
           
        </QuestionContainer>

        <AnswerText> Your answer on the {question} is : {answer} </AnswerText>
          
    </EightBallContainer >
  );
};
export default EightBallScreen;