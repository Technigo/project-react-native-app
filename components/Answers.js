import React, { useState } from "react";
import { View, Title, Button } from "react-native";

const answers = [
  "Shit before you shower, then you don't have to wipe",
  "It is certain",
  "Without a doubt",
  "Yes - definitely",
  "Most likely",
  "Yes",
  "No",
  "Don't count on it",
  "Ask again later",
  "Better not tell you now",
  "My sources say no",
  "Reply hazy, try again",
  "Signs point to yes",
  "I'm sorry what?",
  "Going into a tunnel...try again",
  "404 - answer not found",
  "A communist joke isn't funny... unless everyone gets it",
  "Perhaps",
  "I have spoken",
  "Look into my eyes and it's easy to see. One and one makes two, two and one makes three, it was destiny",
  "Well that's just like your opinion man",
  "Where's the money Lebowski?",
  "Stay out of Malibu!",
  "That rug really tied the room together",
  "Tis but a scratch",
];

const Answers = () => {
  const [answer, setAnswer] = useState(answers[""]);

  const updateAnswer = () => {
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return (
    <View>
      <Title>{answer}</Title>
      <Button
        onPress={() => {
          updateAnswer();
        }}
        title="Behold my infinite wisdom"
      />
    </View>
  );
};

export default Answers;
