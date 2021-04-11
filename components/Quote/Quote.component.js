import React, { useEffect, useState } from "react";

import { useIsShaking } from "../../utils/hooks";
import { setStorage, getStorage, findQuoteById } from "../../utils/helper";
import { Container, Title } from "./Quote.style";
import Like from "../Like/Like.component";

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [isLike, setIsLike] = useState(false);
  const isShaking = useIsShaking();

  useEffect(() => {
    async function getRandomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const newQuote = await response.json();
      setQuote(newQuote);

      // to decide whether the new quote is liked or disliked
      const favouriteQuotes = await getStorage();
      const foundQuote = findQuoteById(favouriteQuotes, newQuote._id);
      setIsLike(Boolean(foundQuote));
    }
    getRandomQuote();
  }, [isShaking]);

  const setFavourite = async (newQuote) => {
    const favouriteQuotes = await getStorage();
    const foundQuote = findQuoteById(favouriteQuotes, newQuote._id);

    let newFavouriteQuotes = [];

    if (foundQuote) {
      // Disliking the quote. Because quote is already liked
      const foundQuoteIndex = favouriteQuotes.indexOf(foundQuote);
      // removing the favourited quote from the list
      favouriteQuotes.splice(foundQuoteIndex, 1);
      newFavouriteQuotes = favouriteQuotes;

      setIsLike(false);
    } else {
      // Adding the new quote to the favourite quote list
      newFavouriteQuotes = [...favouriteQuotes, newQuote];

      setIsLike(true);
    }
    await setStorage(newFavouriteQuotes);
  };

  return (
    <Container>
      <Title>{quote.content}</Title>
      <Title>{quote.author}</Title>
      <Like isLike={isLike} onPress={() => setFavourite(quote)} />
    </Container>
  );
};

export default Quote;
