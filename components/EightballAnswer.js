import React, { useState } from 'react'
import styled from 'styled-components/native'

const Eightball = styled.View`
  width: 300px;
  height: 300px;
  background-color: #000;
  border-radius: 300;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const AnswerBackground = styled.View `
  width: 140px;
  height: 140px;
  background-color: #efefef;
  border-radius: 140;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const Answer = styled.Text`
  color: purple;
  font-size: 20px;
  text-align: center;
`

const EightballAnswer = ({newAnswer}) => {
  // const answers = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes definitely', 'It is decidedly so', 'As I see it yes', 'Most likely', 'Yes', 'Outlook good', 
  // 'Signs point to yes', 'Reply hazy try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 
  // 'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no']

  // const [randomAnswer, setRandomAnswer] = useState('')

  // const setAnswer = () => {
  //   answer = answers[Math.floor(Math.random() * answers.length)]
  //   setRandomAnswer(randomAnswer)
  // }

  // // const answer = answers[Math.floor(Math.random() * answers.length)]

  return (
    <Eightball>
      <AnswerBackground>
        <Answer>
          {newAnswer}
        </Answer>
      </AnswerBackground>
    </Eightball>
  )
}

export default EightballAnswer
