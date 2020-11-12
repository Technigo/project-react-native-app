import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  top: 20px;

  height: 100px;
  width: 100%;
  z-index: 5;

  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`;

const Title = styled.Text`
  font-size: 30px;
  padding-top: 24px;
  color: white;
`;

const Header = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default Header;
