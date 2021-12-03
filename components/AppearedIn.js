import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const InfoText = styled.Text`
  font-size: 24px;
  font-family: "SWFont";
  color: ${(props) => props.theme.colors.textYellow};
`;

const AppearedIn = ({ API }) => {
  console.log("I am in appared");
  const [movie, setNewMovie] = useState({});

  const generateFilm = () => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => setNewMovie(json));
  };

  generateFilm();

  return <InfoText>Name: {movie.title}</InfoText>;
};

export default AppearedIn;
