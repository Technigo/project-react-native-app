import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: pink;
  color: blue;
`;

const Title = styled.Text`
  font-size: 30px;
  padding-top: 24px;
`;

const Header = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default Header;
