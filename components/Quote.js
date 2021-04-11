import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
    flex: 1;
    width: 80%;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

const BaseText = styled.Text`
    color: white;
    font-family: 'Courier New';
`;

const QuoteWrapper = styled.View`
    flex: 1.2;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
`;

const ActualQuote = styled(BaseText)`
    font-size: 18px;
`;

const NameWrapper = styled.View`
    flex: 0.7;
    width: 100%;
    flex-direction: row;
    margin: 20px 60px 0px 0px;
    padding: 0px
    justify-content: flex-end;
    align-items: center;
    background-color: #000;
`;

const Name = styled(BaseText)`
    width: 50%;
    font-size: 16px;
    text-align: right;
    background-color: #000;
    margin: 0px;
`;

const revealQuote = (props) => {

    let howFar = props.currentQuote.shown-1

    const quoteTextAsArray = props.currentQuote.text.split(" ")

    const renderedQuote = quoteTextAsArray.map((word, index) => {
        if (index > howFar) {
            return `${word.replace(/[a-z]|[A-Z]/g, "_")}${index === quoteTextAsArray.length-1 ? "" : " "}`
            
        } else {
            return `${word}${index === quoteTextAsArray.length-1 ? "" : " "}`
        }
    })
    
    return renderedQuote.join("").trim()
}

const Quote = (props) => {
    return (
        <>
            <Wrapper>
                <QuoteWrapper>
                    <ActualQuote 
                        adjustsFontSizeToFit
                    >
                        "{revealQuote(props)}"
                    </ActualQuote>
                </QuoteWrapper> 
                
                <NameWrapper>
                    <Name numberOfLines={3}>- {props.currentQuote.name}</Name>
                </NameWrapper> 
            </Wrapper>
            
        </>
    )
}

export default Quote;