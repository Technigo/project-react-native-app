import React from 'react';
import styled from 'styled-components/native';

const BottomText = styled.Text`
  font-size: 20px;
  color: brown;
  padding: 0 20px;
  text-align: center;
`;

const DescriptionText = ({ variable }) => {
  return (
    <BottomText>{variable}</BottomText>
  );
};

export default DescriptionText;