import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Button, View, Image, Picker } from "react-native";

export const OrderThanks = ({ navigation }) => {
  const image = navigation.getParam("image");
  const descriptionValue = navigation.getParam("descriptionValue");
  const dropdownValue = navigation.getParam("dropdownValue");
  return (
    <Container>
      <Title>Thank you for your review! </Title>
      <Image
        source={image}
        style={{
          width: 200,
          height: 300,
          marginVertical: 30,
          alignSelf: "center"
        }}
      ></Image>
      <Span>Your rating: </Span>
      <Title>{dropdownValue}</Title>
      <Span>Your review: </Span>
      <Title smaller>{descriptionValue}</Title>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: #000;
  color: #fff;
  height: 100%;
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: 10;
  padding-right: 10;
  width: 100%;
`;

const Title = styled.Text`
  font-size: ${props => (props.smaller ? "14px" : "20px")};
  text-align: center;
  color: #fff;
  margin: 0 auto;
  margin-top: 15
  margin-bottom: 10;
  width: 80%;
`;

const Span = styled(Title)`
  color: #00bfff;
  font-size: 14px;
`;

export default OrderThanks;
