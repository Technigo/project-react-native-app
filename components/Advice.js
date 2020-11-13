import React from 'react'
import styled from 'styled-components/native'

const AdviceContainer = styled.View`
justify-content: center;
align-items: center;
background-color: transparent;
padding: 50px;
`;

const AdviceText = styled.Text`
  color: #00106b;
  font-size: 28px;
  font-weight: bold;
`;

export const Advice = ({adviceText}) =>{
  return (
  <AdviceContainer>
      <AdviceText>💡 {adviceText}</AdviceText>
     </AdviceContainer>
  )
}