import React, { useState } from "react";

import backgroundImage from "../assets/background.jpg";
import { ScreenContainer, BallTitle, BallTextDescription, ScreenWrapper, ScreenButton, ScreenButtonText, BallTextInput, TextDescription } from '../styledComponents/ScreenStyling';


export const BallScreen = ({ navigation, route }) => {

    const [answer, setAnswer] = useState();
    const [question, setQuestion] = useState('enter question');

    let params = encodeURIComponent("{question}");
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;

    const handleSubmit = event => {
        event.preventDefault()
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                setAnswer(json.magic.answer);
            });
    };

  return ( 
    <ScreenContainer source={backgroundImage}>
        <BallTitle> What would you like to ask ? </BallTitle>
        <BallTextDescription> 
            Enter your question below
        </BallTextDescription>
        <BallTextInput
            onChangeText={setQuestion}
            value={question}
        /> 
        <ScreenWrapper>
            <ScreenButton onPress={handleSubmit}>
            <ScreenButtonText> Submit question </ScreenButtonText>
            </ScreenButton>
        </ScreenWrapper>
        <TextDescription>{answer} </TextDescription> 
    </ScreenContainer> 
    );
};

export default BallScreen;