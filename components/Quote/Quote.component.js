import React, { useEffect, useState } from "react";

import { useIsShaking } from "../../utils/utils";

import { Container, Title } from "./Quote.style";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const isShaking = useIsShaking();

  useEffect(() => {
    async function getRandomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(`${data.content} —${data.author}`);
    }
    getRandomQuote();
  }, [isShaking]);

  return (
    <Container>
      <Title>{quote}</Title>
    </Container>
  );
};

export default Quote;
