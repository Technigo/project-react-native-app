import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'


const App = () => {
  const [question, setQuestion] = useState('begin')
  const [score, setScore] = useState(0)
  const [buttonPressed, setButtonPressed] = useState(false)
  const [hide, setHide] = useState(false)

  const nextQuestion = () => {
    if(question==='begin') {
      setQuestion('one')
    } else if(question==='one') {
      setQuestion('two')
      setButtonPressed(false)
      setHide(false)
    } else if(question==='two') {
      setQuestion('three')
      setButtonPressed(false)
      setHide(false)
    } else if(question==='three') {
      setQuestion('four')
      setButtonPressed(false)
      setHide(false)
    } else if(question==='four') {
      setQuestion('five')
      setButtonPressed(false)
      setHide(false)
    } else if(question==='five') {
      setQuestion('summary')
      setHide(false)
    }
  }

  const rightAnswer = () => {
    alert('Correct answer! Please go to the next question')
    if(buttonPressed===false) {
      setScore(score+1)
      setHide(true)
    }
    setButtonPressed(true)
  }

  const wrongAnswer = () => {
    alert('Wrong answer! Please go to the next question')
    setHide(true)
  }

  const restartQuiz = () => {
    setScore(0)
    setQuestion('begin')
    setButtonPressed(false)
  }


  return (
    <Container>
      {question === 'begin' && (
      <View>
        <Container>
        <Title>Welcome to Michels movie quiz</Title>
        <Title>🍿🍿🍿</Title>
        <Title>❓❓❓</Title>
        <Button>
          <ButtonText onPress={() => setQuestion('one')}>Start the quiz</ButtonText>
        </Button>
        <LottieView source={require('./1879-movie-loading.json')} autoPlay loop style={{height: 100}}/>
        </Container>
      </View>
    )}
     
    {question === 'one' && (
      <View>
        <Container>
        <Title>Question 1</Title>
        <Title>How many movies with Leonardo DiCaprio have Martin Scorsese directed?</Title>
        {!hide && (
        <View>
          <Button>
            <ButtonText onPress={wrongAnswer}>Three</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={rightAnswer}>Five</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Four</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Two</ButtonText>
          </Button>
        </View>
        )}
        <Title></Title>
        <Title>{score} points</Title>
        </Container>
      </View>
    )}

    {question === 'two' && (
      <View>
        <Container>
        <Title>Question 2</Title>
        <Title>Which one of these actors has won an Oscar for best actor?</Title>
        {!hide && (
        <View>
          <Button>
            <ButtonText onPress={rightAnswer}>Jamie Foxx</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Johnny Depp</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Tom Cruise</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Daniel Craig</ButtonText>
          </Button>
        </View>
        )}
        <Title></Title>
        <Title>{score} points</Title>
        </Container>
      </View>
    )}

    {question === 'three' && (
      <View>
        <Container>
        <Title>Question 3</Title>
        <Title>Which one of the following movies was the most expensive to make?</Title>
        {!hide && (
        <View>
          <Button>
            <ButtonText onPress={wrongAnswer}>Titanic</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={rightAnswer}>Avatar</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Jurassic Park</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>The Matrix</ButtonText>
          </Button>
        </View>
        )}
        <Title></Title>
        <Title>{score} points</Title>
        </Container>
      </View>
    )}

    {question === 'four' && (
      <View>
        <Container>
        <Title>Question 4</Title>
        <Title>Which one of these movies does Nicole Kidman NOT appear in?</Title>
        {!hide && (
        <View>
          <Button>
            <ButtonText onPress={wrongAnswer}>The Hours</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={rightAnswer}>Magnolia</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Lion</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>The Others</ButtonText>
          </Button>
        </View>
        )}
        <Title></Title>
        <Title>{score} points</Title>
        </Container>
      </View>
    )}

    {question === 'five' && (
      <View>
        <Container>
        <Title>Question 5</Title>
        <Title>From which movie is the following quote: "My mama always said life is like 
        a box of chocolates. You never know what you're gonna get"</Title>
        {!hide && (
        <View>
          <Button>
            <ButtonText onPress={wrongAnswer}>Big</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>Mrs. Doubtfire</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={wrongAnswer}>The Graduate</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={rightAnswer}>Forrest Gump</ButtonText>
          </Button>
        </View>
        )}
        <Title></Title>
        <Title>{score} points</Title>
        </Container>
      </View>
    )}

    {question!=='begin' && (
      <NextButton>
        <ButtonText onPress={nextQuestion}>Next</ButtonText>
      </NextButton>
    )} 

    {question === 'summary' && (
      <View>
        <Container>
        <Title>Thank you for completing the quiz!</Title>
        {score>= 4 && (
          <Title>You're a star!</Title>
        )}
        <Title>Your final score is {score} points</Title>
        <Title></Title>
        <Title>The right answers are:</Title>
        <Summary>Q1: How many movies with Leonardo DiCaprio have Martin Scorsese directed? 
          Answer: 5 movies ("Gangs of New York", "The Aviator", "The Departed", 
          "Shutter Island" and "The Wolf of Wall Street")
        </Summary>
        <Summary>Q2: Which one of these actors has won an Oscar for best actor? 
          Answer: Jamie Foxx (for "Ray")</Summary>
        <Summary>Q3: Which one of the following movies was the most expensive to make? 
          Answer: "Avatar" ($237 million, estimated budget)</Summary>
        <Summary>Q4: Which one of these movies does Nicole Kidman NOT appear in? 
          Answer: "Magnolia"</Summary>
        <Summary>Q5: From which movie is the following quote: "My mama always said life is like 
          a box of chocolates. You never know what you're gonna get"
          Answer: "Forrest Gump"</Summary>
        <Title></Title>
        <Button>
          <ButtonText onPress={restartQuiz}>Restart</ButtonText>
        </Button>
        </Container>
      </View>
    )}
    </Container>
  )
}


const Container = styled.View`
  align-items: center;
  background-color: papayawhip;
  color: green;
  flex: 1;
  justify-content: center;
`

const Title = styled.Text`
  color: #A52A2A;
  font-size: 24px;
  margin-bottom: 3px;
`

const Summary = styled(Title)`
  font-size: 16px;
  padding-bottom: 2px;
`

const Button = styled.TouchableOpacity`
  background: #FFB6C1;
  border-radius: 20px;
  margin-bottom: 5px;
  padding: 10px 20px;
`
const NextButton = styled(Button)`
  bottom: 40;
  position: absolute;
`

const ButtonText = styled.Text`
  color: #1f2e1f;
  font-size: 18;
`

export default App
