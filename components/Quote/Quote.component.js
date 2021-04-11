import React, { useEffect, useState } from "react";

import { useIsShaking } from "../../utils/hooks";
import {
  Container,
  QuoteContainer,
  QuoteAuthor,
  QuoteText,
  InfoText,
} from "./Quote.style";

const Quote = () => {
  const [quote, setQuote] = useState({});
  const isShaking = useIsShaking();

  useEffect(() => {
    async function getRandomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const newQuote = await response.json();
      setQuote(newQuote);
    }
    getRandomQuote();
  }, [isShaking]);

  return (
    <Container>
      <QuoteContainer>
        <QuoteText>{quote.content}</QuoteText>
        <QuoteAuthor>{quote.author}</QuoteAuthor>
      </QuoteContainer>
      <InfoText>Shake your phone to get a new quote</InfoText>
    </Container>
  );
};

export default Quote;
