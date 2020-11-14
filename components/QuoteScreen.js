import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


const QuoteContainer = styled.View`
   background-color: #0096C9;
   display: flex;
   flex: 1;
   justify-content: center;
   align-items: center;
`;

const QuoteText = styled.Text`
    color: white;
    font-size: 32px;
`


export const QuoteScreen = ({navigation, route}) => {
    console.log(route.params.data.quoteList);

    const randomSelector = array => array[Math.floor(Math.random() * array.length)];
    const quote = randomSelector(route.params.data.quoteList);
    
    console.log(quote)
    return (
    <QuoteContainer>
        <QuoteText>{quote.quote}</QuoteText>
    </QuoteContainer>)
}
