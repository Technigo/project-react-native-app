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
    background-color: #928380;
`;

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

    //How do I get

    // props.onCurrentQuoteChange(addProperties(JSON.stringify(testquote)))

    return (
        <Container>
            <Quote 
                quote={testquote}
            />
        </Container>
    )
}

export default QuoteHandler;