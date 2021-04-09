import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const QuoteWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #3b4e62;
    padding: 5px;
`;

const BaseText = styled.Text`
    color: white;
`;

const ActualQuote = styled(BaseText)`
    font-size: ${(props) => (190 - props.length)}px;
    margin: 10px 30px 40px 30px;
    background-color: green;
`;

const NameWrapper = styled.View`
    flex: 0.25;
    width: 100%;
    flex-direction: row;
    margin: 10px 50px 20px 20px;
    padding: 0px
    justify-content: flex-end;
    align-items: center;
    background-color: purple;
`;

const Name = styled(BaseText)`
    font-size: 18px;
    text-align: right;
    background-color: red;
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
            return `${word.replace(/[a-z]|[A-Z]/g, "_")} `
            //itterate as many times as word.length
        } else {
            return `${word} `
        }
    })

    return renderedQuote_2
}

const Quote = (props) => {
    return (
        <>
            <QuoteWrapper>
                <ActualQuote length={props.length}>{revealQuote(props.quote, props)}</ActualQuote>
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