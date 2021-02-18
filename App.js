import React, { useState } from 'react';
import {Container, Img, Title, Text, Button, ButtonText, NextButton, Question, AnswerText, TitleRight, TitleWrong, Score, HighScore, FinalImg, FinalScore, EndTitle} from './components/Styles';
import { View, Vibration } from 'react-native';


export default function App() {
  const [question, setQuestion] = useState('startQuiz');
  const [score, setScore] = useState(0);
  const [hide, setHide] = useState(false);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);
  const duration = 600;

  const afterAnswering = () => {
    setHide(false);
    setRight(false);
    setWrong(false);
  };

  const nextQuestion = () => {
    if (question === 'startQuiz') {
      setQuestion('firstQ');
    } else if (question === 'firstQ') {
      setQuestion('secondQ');
      afterAnswering();
    } else if (question === 'secondQ') {
      setQuestion('thirdQ');
      afterAnswering();
    } else if (question === 'thirdQ') {
      setQuestion('fourthQ');
      afterAnswering();
    } else if (question === 'fourthQ') {
      setQuestion('fifthQ');
      afterAnswering();
    } else if (question === 'fifthQ') {
      setQuestion('sumAnswer');
      afterAnswering();
    }
  };

  const rightAnswer = () => {
    setScore(score + 1);
    setHide(true);
    setRight(true);
  };

  const wrongAnswer = () => {
    setHide(true);
    setWrong(true);
    return Vibration.vibrate(duration);
  };

  const restartQuiz = () => {
    setScore(0);
    setQuestion('startQuiz');
  };

  return (
    <Container>
      {question === 'startQuiz' && (
        <View>
          <Container>
            <Img source={require('./components/kuwtk1.jpeg')} />
            <Title>Quiz:</Title>
            <Text>Keeping up with The Kardashians</Text>
            <Button>
              <ButtonText onPress={() => setQuestion('firstQ')}>
                Test your Kardashian knowledge
              </ButtonText>
            </Button>
          </Container>
        </View>
      )}

      {question === 'firstQ' && (
        <View>
          <Container>
            <Img source={require('./components/sistas.jpg')} />
            <Title>1/5</Title>
            <Question>When did the first episode of Keeping up with The Kardashians air?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={rightAnswer}>
                    October 14, 2007
                  </AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>August 26, 2008</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>May 3rd, 2006</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>You're an OG fan! Keep going!</TitleRight>}
            {wrong && <TitleWrong>A true fan would never get this wrong :(</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'secondQ' && (
        <View>
          <Container>
          <Img source={require('./components/lol.jpeg')} />
            <Title>2/5</Title>
            <Question>In 2007, Khloé was arrested for a DUI and voluntarily turned herself in to serve jail time. How did Kim spend the morning leading up to Khloé's three-hour stint in jail?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={wrongAnswer}> Shoe shopping</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={rightAnswer}>Taking selfies on her blackberry in the car</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Ugly crying</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>You got it girl!</TitleRight>}
            {wrong && <TitleWrong>Kim is crying right now because you got it wrong...</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'thirdQ' && (
        <View>
          <Container>
          <Img source={require('./components/kimcry.jpg')} />
            <Title>3/5</Title>
            <Question>What does Kourtney say to Kim after she loses a diamond earring in the ocean during a family vacation in Bora Bora?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Kim, you can totally buy another one.</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>
                    Kim, just get a diver to find it.
                  </AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={rightAnswer}>
                    Kim, there's people that are dying.
                  </AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>You're correct my friend!</TitleRight>}
            {wrong && <TitleWrong>Nope, but the ugly cry must've scared you into a wrong answer..</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'fourthQ' && (
        <View>
          <Container>
          <Img source={require('./components/kim.jpeg')} />
            <Title>4/5</Title>
            <Question>
              Why did Kim say this to Khloé?
            </Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Because Khloé read her Vogue cover on the toilet.</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Because Khloé ate her salad.</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={rightAnswer}>Because Khloé woke her up.</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>Correct! And can you imagine?</TitleRight>}
            {wrong && <TitleWrong>Wrong but this was a tough one, so no worries.</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'fifthQ' && (
        <View>
          <Container>
            <Img source={require('./components/disick.webp')} />
            <Title>5/5</Title>
            <Question>Which is not one of the three “Disick” names Scott says he will go by?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={rightAnswer}>Lord Disick</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Sir Disick</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Prince Scott</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>Wow, nice job!</TitleRight>}
            {wrong && (
              <TitleWrong>Noooope, but let's see how you did!</TitleWrong>
            )}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question !== 'startQuiz' && (
        <NextButton>
          <ButtonText onPress={nextQuestion}>Next</ButtonText>
        </NextButton>
      )}

      {question === 'sumAnswer' && (
        <View>
          <Container>
            {score >= 4 && <HighScore><EndTitle>Good job, Kris would be so proud of you!</EndTitle>
            <FinalImg source={require('./components/kardashians.jpg')} /></HighScore>}
            <FinalScore>Your final score is </FinalScore>
            <Title>{score} / 5 points</Title>
            <Button>
              <ButtonText onPress={restartQuiz}>Restart</ButtonText>
            </Button>
          </Container>
        </View>
      )}
    </Container>
  );
}

