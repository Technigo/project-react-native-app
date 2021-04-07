import React from 'react'


// API:s
import { MAGIC_API } from './reusable/urls';

/* Magic_API just to remember: 
    "Id": 0,
    "Answer": "It is certain.",
    "Type": "affirmative"
*/

/* const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: white; 
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`; */

/* const MagicBall = styled.Image`
  width: 40px,
  height: 40px,
  border-radius: 35,
  object-fit: contain,
`;
 */
let MagicAnswer

  fetch(MAGIC_API)
    .then(res => res.json())
    .then((magicdata) => {
    console.log(magicdata)
      MagicAnswer = magicdata
      })
      // .then(magicdata => setMagicAnswer(magicdata))
      .catch(err => console.error(err))
// steg 1 returnera magicAnswerList[0].Answer 
// returnera {magicAnswerList} -----> har döpt om - se om jag nu får till det! :) 
/*   return (
    <Container>
      <Title>
      {magicAnswerList.map(message => (
          <Text key={message}>{message.Answer}</Text>
      ))}
      </Title>
    </Container>
  ) */

export default MagicAnswer
