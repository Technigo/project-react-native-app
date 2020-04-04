import React from "react";
import styled from "styled-components/native";

const answers = [
  "Absolutely",
  "Absolutely not",
  "Go for it",
  "I'm not sure, ask again",
  "Definately",
  "Computer says no",
  "Probably not",
  "Sure!",
];

const RandomAnswer = () => {
  // console.log("random month =>", RandomAnswer);

  return answers[Math.floor(Math.random() * answers.length)];
};

export default RandomAnswer;
