import React from "react";
import styled from "styled-components/native";

const HeaderView = styled.View`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 20px;
  background-color: #fdf2d6;

  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: #6e4d1b;
  shadow-offset: 0px 6px;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-style: solid;
  border-left-color: #ab782c;
  border-right-color: #ab782c;
  border-bottom-color: #ab782c;
  border-left-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 2px;
`;

const HeaderText = styled.Text`
  color: #99541c;
  font-weight: 500;
  font-size: ${(props) => (props.title ? "35px" : "20px")};
  text-align: center;
  margin-top: ${(props) => (props.title ? "25px" : "4px")};
`;

export const Header = ({ title, titleTwo }) => {
  return (
    <HeaderView>
      <HeaderText title>{title}</HeaderText>
      <HeaderText>{titleTwo}</HeaderText>
    </HeaderView>
  );
};
// export default Header;
