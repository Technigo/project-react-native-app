import React, { useState } from 'react'
import styled from 'styled-components/native'

const AnswerContainer = styled.View `
  width: 140px;
  height: 140px;
  background-color: papayawhip;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`

const Answer = styled.Text`
  color: purple;
  font-size: 20px;
`

const EightballAnswer = () => {

  const answers = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes definitely', 'It is decidedly so', 'As I see it yes', 'Most likely', 'Yes', 'Outlook good', 
  'Signs point to yes', 'Reply hazy try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 
  'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no']

  const answer = answers[Math.floor(Math.random() * answers.length)]

  return (
    <AnswerContainer>
      <Answer>
        {answer}
      </Answer>
    </AnswerContainer>
  )
}

export default EightballAnswer
