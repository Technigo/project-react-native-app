import React from "react";

import styled from "styled-components/native";

export const Footer = ({ name, project }) => {
  const View = styled.View`
    width: 100%;
    padding: 5px 0 15px;
    margin-top: 20px;
    background-color: #fdf2d6;

    shadow-opacity: 1;
    shadow-radius: 0px;
    shadow-color: #6e4d1b;
    shadow-offset: 0px 6px;

    border-style: solid;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    border-left-color: #ab782c;
    border-right-color: #ab782c;
    border-top-color: #ab782c;

    border-left-width: 2px;
    border-right-width: 2px;
    border-top-width: 2px;
  `;
  //border: 2px solid #ab782c;
  const Text = styled.Text`
    color: #99541c;
    font-weight: ${(props) => (props.name ? 700 : 500)}
    font-size: ${(props) => (props.name ? "10px" : "10px")};
    text-align: center;
    margin: ${(props) => (props.project ? "1px" : "1px")};
  `;

  return (
    <View>
      <Text name>
        {name} <Text>{project}</Text>
      </Text>
    </View>
  );
};
