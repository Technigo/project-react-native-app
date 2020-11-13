import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #6cb3ab;
  justify-content: center;
  align-items: center;
`;

const TouchableOpacity = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #86754f;
  text-transform: uppercase;
  text-align: center;
`;

const Button = ({ onPress, text }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </TouchableOpacity>
    </Container>
  );
};

export default Button;
