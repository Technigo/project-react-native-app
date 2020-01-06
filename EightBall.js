import React from "react";
import styled from "styled-components";

const EightBall = () => (
  <>
    <Eightball>
      <EightballContent>
        <EightballText>8</EightballText>
      </EightballContent>
    </Eightball>
    <Title>Shake your phone to reveal the magic answer!</Title>
  </>
);

const Eightball = styled.View`
  width: 200;
  height: 200;
  border: 55px black solid;
  border-radius: 100;
  margin-bottom: 35px;
`;

const EightballContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const EightballText = styled.Text`
  font-size: 42px;
  font-weight: 700;
`;

const Title = styled.Text`
  width: 200px;
  text-align: center;
  font-size: 24px;
  color: white;
`;

export default EightBall;