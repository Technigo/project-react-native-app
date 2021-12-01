import { createSlice } from "@reduxjs/toolkit";

const proverbs = [
  {
    id: 1,
    quote:
      "The early bird gets the worm, but the second mouse gets the cheese.",
  },
  {
    id: 2,
    quote:
      "Be on the alert to recognize your prime at whatever time of your life it may occur.",
  },
  {
    id: 3,
    quote: "Somethimes all you need is to spice up your life! ",
  },
  {
    id: 4,
    quote: "Your road to glory will be rocky, but fulfilling.",
  },
  {
    id: 5,
    quote: "Patience is your alley at the moment. Don’t worry!",
  },
  {
    id: 6,
    quote: "Nothing is impossible to a willing heart.",
  },
  {
    id: 7,
    quote: "Don’t worry about money. The best things in life are free.",
  },
  {
    id: 8,
    quote: "Don’t pursue happiness – create it.",
  },
];

const initialState = {
  proverbs,
  current: {},
};

export const quotes = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    getRandomQuote: (store) => {
      const random =
        store.proverbs[Math.floor(Math.random() * proverbs.length)];
      store.current = random;
    },
  },
});
