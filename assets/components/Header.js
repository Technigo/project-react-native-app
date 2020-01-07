import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Header = props => <HeaderContainer>{props.children}</HeaderContainer>;

export default Header;

const HeaderContainer = styled.View`
  align-items: center;
  background-color: #cc0000;
  flex: 1;
  justify-content: center;
`;
