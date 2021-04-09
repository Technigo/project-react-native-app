import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, Image } from 'react-native'

// API:s
import { MAGIC_API_single } from '../data/magicanswer'

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
  const [magicAnswer, setMagicAnswer] = useState({})

    useEffect(() => {
    fetch(MAGIC_API_single)
      .then(res => res.json())
      .then(magicdata => setMagicAnswer(magicdata))
      .catch(err => console.error(err))
  }, [])
  if (magicAnswer === undefined) {
    return <></>;
  }

  return (
    <Container>
      <Title>
        Ask a question and shake your device.
      </Title>
      <Text>
        {magicAnswer.Answer}
      </Text>
      <Image
        source={require('../assets/magic-ball.png')}
        accessibilityLabel='Magic 8 ball'
        style={{
          height: 200,
          width: 200,
          resizeMode: 'contain'
      }}
      />
    </Container>
  )
}
