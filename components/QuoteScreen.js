import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CustomTouchable from "./CustomTouchable";

import { Accelerometer } from "expo-sensors";

const QuoteContainer = styled.View`
  background-color: #0096c9;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const QuoteText = styled.Text`
  color: white;
  font-size: 32px;
`;

const QuoteScreen = ({ navigation, route }) => {
  const [currentQuote, setCurrentQuote] = useState({quote:"Hello!"});
  const [data, setData] = useState({});
  const [hasShaked, setHasShaked] = useState(false);
  const [hasShakedInitially, setHasShakedInitially] = useState(false);
  
  const getQuote = () => {
      const quote = route.params.data.quoteList[Math.floor(Math.random() * route.params.data.quoteList.length)];
      setCurrentQuote(quote);
      console.log(currentQuote);
    }
  
    useEffect(() => {
        Accelerometer.setUpdateInterval(500);
        const listener = Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
            setHasShakedInitially(false);
            setHasShaked(false);  
        }, []);

        return () => {
            listener && listener.remove();
        };
    }, []);

    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    if (!hasShaked && totalForce > 3) {
        setHasShakedInitially(true);
        setHasShaked(true);
        getQuote();
    }
    return (
        <> 
        {hasShakedInitially ? (
            <QuoteContainer>
                <QuoteText>{currentQuote.quote}</QuoteText>
                <QuoteText>Shake for more!</QuoteText>
              </QuoteContainer>
        ) : (
            <QuoteContainer>
            <QuoteText>{currentQuote.quote}</QuoteText>
            <QuoteText>Can't get enough? Shake shake shake.</QuoteText>
          </QuoteContainer>
        )
        } 
        </>
        )
    
};

export default QuoteScreen;