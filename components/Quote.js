import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const QuoteWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 5px;
`;

const BaseText = styled.Text`
    color: white;
    font-family: 'Courier New';
`;

const ActualQuote = styled(BaseText)`
    font-size: ${(props) => (120 - props.length)}px;
    margin: 10px 30px 30px 30px;
    background-color: #000;
`;

const NameWrapper = styled.View`
    flex: 0.25;
    width: 100%;
    flex-direction: row;
    margin: 0px 90px 20px 20px;
    padding: 0px
    justify-content: flex-end;
    align-items: center;
    background-color: #000;
`;

const Name = styled(BaseText)`
    font-size: 18px;
    text-align: right;
    background-color: #000;
    margin: 0px;
`;

const isLetter = (char) => {
    return char.length === 1 && char.match(/[a-z]/i);
}

const revealQuote = (quote, props) => {

    let howFar = quote.shown-1


    //every WORD is an array entry
    const quoteTextAsArray_2 = quote.text.split(" ")

    console.log(quoteTextAsArray_2)

    const renderedQuote_2 = quoteTextAsArray_2.map((word, index) => {
        if (index > howFar) {
            return `${word.replace(/[a-z]|[A-Z]/g, "_")}${index === quoteTextAsArray_2.length-1 ? "" : " "}`
            //itterate as many times as word.length
        } else {
            return `${word}${index === quoteTextAsArray_2.length-1 ? "" : " "}`
        }
    })

    return renderedQuote_2
}

const Quote = (props) => {
    return (
        <>
            <QuoteWrapper>
                <ActualQuote length={props.quote.length}>"{revealQuote(props.quote, props)}"</ActualQuote>
                <NameWrapper>
                    <Name>- {props.quote.name}</Name>
                </NameWrapper> 
            </QuoteWrapper>
            
        </>
    )
}

export default Quote;

//every character is an array entry
    // const quoteTextAsArray = Array.from(quote.text)

    // const renderedQuote = quoteTextAsArray.map((char, index) => {
    //     if (!isLetter(char)) {
    //         howFar++
    //         return char
    //     } else if (index > howFar) {
    //         return "_"
    //     } else {
    //         return char
    //     }
    // })

    // console.log(renderedQuote)