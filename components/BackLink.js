import React from 'react';
import styled from 'styled-components/native';

const StyledLink = styled.TouchableOpacity`
  padding: 0 10px;
`;

const LinkText = styled.Text`
  color: brown;
  font-size: 12px;
  font-style: italic;
  text-align: center;
`;

const BackLink = ({ text, onPress }) => {
  return (
    <StyledLink onPress={onPress} >
      <LinkText>{text}</LinkText>
    </StyledLink>
  );
};

export default BackLink;