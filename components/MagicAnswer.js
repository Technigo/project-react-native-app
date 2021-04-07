import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, Image, View } from 'react-native' //can delete all but Image later

// API:s
import { MAGIC_API } from './reusable/urls';

/* Magic_API just to remember: 
    "Id": 0,
    "Answer": "It is certain.",
    "Type": "affirmative"
*/

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: white; 
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

/* const MagicBall = styled.Image`
  width: 40px,
  height: 40px,
  border-radius: 35,
  object-fit: contain,
`;
 */

export const MagicAnswer = () => {
  const [magicAnswerList, setMagicAnswerList] = useState([])

    useEffect(() => {
    fetch(MAGIC_API)
      .then(res => res.json())
      .then((magicdata) => {
        console.log(magicdata)
        setMagicAnswerList(magicdata)
      })
      // .then(magicdata => setMagicAnswer(magicdata))
      .catch(err => console.error(err))
  }, [])
    if (magicAnswerList.length === 0) {
    return <></>
  }
// steg 1 returnera magicAnswerList[0].Answer 
// returnera {magicAnswerList} -----> har döpt om - se om jag nu får till det! :) 
  return (
    <Container>
      <Title>
      {magicAnswerList.map(message => (
          <Text key={message}>{message.Answer}</Text>
      ))}
      </Title>
    </Container>
  )
}
