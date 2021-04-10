import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import Quote from './Quote'


// const addProperties = (quote) => {
//     quote.shown = ???
//     quote.length = quote.q.length
// }

const Container = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;

//For actual API response: if daily quote is same as is already loaded, shown remains
//Goal for tonight:
//[_] Get quote of the day fetch to work! :D

const mockJSON = [
    {
      "q":"Quality means doing it right when no one is looking.",
      "a":"Henry Ford",
      "h":"<blockquote>“Quality means doing it right when no one is looking.” — <footer>Henry Ford</footer></blockquote>"
    },
    {
      "q":"The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      "a":"Albert Einstein",
      "h":"<blockquote>“The important thing is not to stop questioning. Curiosity has its own reason for existing.” — <footer>Albert Einstein</footer></blockquote>"
    }
]



const QuoteHandler = (props) => {

    const testquote = {
        text: mockJSON[1].q,
        name: mockJSON[1].a,
        length: mockJSON[1].q.length,
        shown: props.shown
    }

    useEffect (() => {

        fetch("https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/random", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'omit',
            headers: {
            
            }
            //     //'Content-Type': 'application/json'
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
        })
        .then(response => response.json())
        .then(todaysQuote => {
            console.log(todaysQuote)
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

    //How do I get

    // props.onCurrentQuoteChange(addProperties(JSON.stringify(testquote)))

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