import React from "react";
import styled from "styled-components/native";
import splash from "../assets/splash.png";

const LogoImage = styled.Image`
  width: 40px;
  height: 80px;
`;

const Header = styled.View`
  margin-top: 40px;
`;

export const SiteHeader = () => {
  return (
    <Header>
        <LogoImage source={splash} />
    </Header>
  )
};
