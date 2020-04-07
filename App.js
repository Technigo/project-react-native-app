import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Vibration, Image } from 'react-native';


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
            <Img source={require('./components/happy.jpg')} />
            <Title>Quiz:</Title>
            <Text>The Office</Text>
            <Button>
              <ButtonText onPress={() => setQuestion('firstQ')}>
                Start the quiz
              </ButtonText>
            </Button>
          </Container>
        </View>
      )}

      {question === 'firstQ' && (
        <View>
          <Container>
            <Title>1/5</Title>
            <Question>What did Michael Scott burn his foot on?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={rightAnswer}>
                    George Foreman Grill
                  </AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Hot Lava</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>
                    Flaming Hot Cheetos
                  </AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>A Fireplace</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>Correct - Lets move on!</TitleRight>}
            {wrong && <TitleWrong>Wrong... Better luck next time!</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'secondQ' && (
        <View>
          <Container>
            <Title>2/5</Title>
            <Question>Ryan started something, but what?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={wrongAnswer}>A Riot</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Book Club</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={rightAnswer}>A Fire</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Rehab</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>Correct - Lets move on!</TitleRight>}
            {wrong && <TitleWrong>Wrong... Better luck next time!</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'thirdQ' && (
        <View>
          <Container>
            <Title>3/5</Title>
            <Question>What does Michaels coffee cup say?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Dunder Mifflin</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Prison Mike</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>
                    Toby Spread Corona
                  </AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={rightAnswer}>
                    Worlds Best Boss
                  </AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>Correct - Lets move on!</TitleRight>}
            {wrong && <TitleWrong>Wrong... Better luck next time!</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'fourthQ' && (
        <View>
          <Container>
            <Title>4/5</Title>
            <Question>
              Dwight unfortunatley recreates a movie scene during CPR, which
              character?
            </Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Harry Potter</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Darth Vader</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={rightAnswer}>Hannibal Lector</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Jack Sparrow</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>Correct - Lets move on!</TitleRight>}
            {wrong && <TitleWrong>Wrong... Better luck next time!</TitleWrong>}
            <Score>{score} points</Score>
          </Container>
        </View>
      )}

      {question === 'fifthQ' && (
        <View>
          <Container>
            <Title>5/5</Title>
            <Question>In what department does Derrick Philbin work?</Question>
            {!hide && (
              <View>
                <Button>
                  <AnswerText onPress={rightAnswer}>Warehouse</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Sales</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Manager</AnswerText>
                </Button>
                <Button>
                  <AnswerText onPress={wrongAnswer}>Reception</AnswerText>
                </Button>
              </View>
            )}
            {right && <TitleRight>Correct! Check results!</TitleRight>}
            {wrong && (
              <TitleWrong>Wrong! But let's check out the results!</TitleWrong>
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
            {score >= 4 && <EndTitle>Michael Scott would be oh so proud!</EndTitle>}
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

const Container = styled.View`
  align-items: center;
  background-color: lavenderblush;
  color: black;
  flex: 1;
  justify-content: center;
`;

const Img = styled.Image`
  top: 0;
  width: 500px;
  height: 300px;
  margin-bottom: 20px;
`

const Title = styled.Text`
  color: darkorange;
  font-family: Menlo;
  font-size: 32px;
  margin-bottom: 10px;
  text-align: center;
`;

const Text = styled.Text`
  font-family: Menlo;
  margin-bottom: 20px;
  font-size: 18px;
  color: darkorange;
`;

const Question = styled.Text`
  font-size: 22px;
  font-family: Menlo;
  text-align: center;
  color: darkorange;
  padding: 10px;
  margin-bottom: 20px;
`

const AnswerText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: Menlo;
  color: teal;
`

const TitleRight = styled(Title)`
  padding: 20px 10px;
  font-size: 18px;
  color: plum;
`;

const TitleWrong = styled(Title)`
  padding: 20px 10px;
  font-size: 18px;
  color: rosybrown;
`;

const Score = styled(Title)`
  padding-top: 10px;
  font-size: 12px;
`;

const Summary = styled(Title)`
  border: 1px solid;
  font-size: 16px;
  padding-bottom: 2px;
`;

const Button = styled.TouchableOpacity`
  background: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px 30px;
`;

const ButtonText = styled.Text`
  color: teal;
  font-family: Menlo;
  font-size: 20px;
`;

const EndTitle = styled.Text`
  font-family: Menlo;
  color: teal;
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
`

const FinalScore = styled.Text`
  font-family: Menlo;
  color: darkorange;
  font-size: 20px;
`

const NextButton = styled(Button)`
  bottom: 10;
  position: absolute;
`;
