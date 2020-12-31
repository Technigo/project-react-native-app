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
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  padding: 25px 0 15px 0;
`;
