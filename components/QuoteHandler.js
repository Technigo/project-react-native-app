import React, { useEffect } from 'react';
import styled from 'styled-components/native';

import Quote from './Quote'

const Container = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;

const QuoteHandler = (props) => {

    useEffect (() => {

        //fetch is done through thingproxy to bypass opaque CORS-related error response
        fetch("https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/today", {
            method: 'GET',
            mode: 'cors',
        })
        .then(response => response.json())
        .then(todaysQuote => {

            props.onCurrentQuoteChange ({
                text: todaysQuote[0].q,
                name: todaysQuote[0].a,
                length: todaysQuote[0].q.split(" ").length,
                shown: props.shown
            })
        })
        .catch (err => {
            console.error(err)
        })

    }, [])

    return (
        <Container>
            <Quote 
                currentQuote={props.currentQuote}
                onCurrentQuoteChange={props.onCurrentQuoteChange}
            />
        </Container>
    )
}

export default QuoteHandler;