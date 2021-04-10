import React from 'react'
import styled from 'styled-components/native'

const Eightball = styled.View`
  width: 335px;
  height: 335px;
  background-color: #000;
  border-radius: 335;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const Circle = styled.View `
  width: 200px;
  height: 200px;
  border-radius: 200;
  border: solid 5.5px #222;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const Triangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 100px;
  border-left-style: solid;
  border-left-color: transparent;
  border-right-width: 100px;
  border-right-style: solid;
  border-right-color: transparent;
  border-top-width: 150px;
  border-top-style: solid;
  border-top-color: blue;
  //border-top-color: #1B3BCD;
  margin-top: 63px;
  justify-content: flex-end;
  align-items: center;
`

const AnswerContainer = styled.View`
  width: 150px;
  height: 130px;
  align-items: center;
`

const Answer = styled.Text`
  color: #FFF;
  font-size: 18px;
  text-align: center;  
`

const EightballAnswer = ({newAnswer}) => {

  return (
    <Eightball>
        <Circle>
          <Triangle>
            <AnswerContainer>
              <Answer>
                {newAnswer}
              </Answer>
            </AnswerContainer>
          </Triangle>
        </Circle>
    </Eightball>
  )
}

export default EightballAnswer
