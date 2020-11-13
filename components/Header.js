import React from "react";
import styled from "styled-components/native";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>The Joke App 🤣</HeaderText>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.View`
  padding: 10px;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const SubHeaderText = styled.Text`
  font-size: 15px;
`;
