import React from 'react';
import styled from 'styled-components/native';

const MagicBallIconTwo = styled.Image`
  margin: 50px 0;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

export const MagicBall = () => {
    return(
        <MagicBallIconTwo source={require('../assets/magic-eight-ball.png')}/>
    );
};