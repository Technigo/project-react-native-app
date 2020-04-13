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
  return answers[Math.floor(Math.random() * answers.length)];
};

export default RandomAnswer;
