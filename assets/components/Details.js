import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";
import { Heading } from "heading";

export const Details = props => {
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setDetails(json);
      });
  }, [props]);

  return (
    <Card>
      <Heading>{details.name}</Heading>
      {details && (
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: details.sprites.front_default }}
        />
      )}
    </Card>
  );
};

const Card = styled.View`
  align-items: center;
  background-color: #000;
  height: 50;
  justify-content: center;
  width: 100%;
`;
