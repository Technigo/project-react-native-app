import React from 'react';
import styled from 'styled-components/native';

const LoadingContainer = styled.View`
  width: 250px;
  height: 250px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 24px;
  color: brown;
  padding: 0 5px;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;