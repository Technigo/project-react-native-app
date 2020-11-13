import React from 'react';
import styled from 'styled-components/native';

const Flower = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 60px;
`;

const Animation = () => {
  return <Flower source={require('../assets/animation_200_khg5z7e1.gif')} />;
};

export default Animation;
