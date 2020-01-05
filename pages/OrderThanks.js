import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

export const OrderThanks = ({ navigation }) => {
  const name = navigation.getParam("name");
  const image = navigation.getParam("image");

  return (
    <Container>
      <Title>Thank you for your order {name}! </Title>
      <Image
        source={image}
        style={{
          width: 200,
          height: 300,
          marginVertical: 30,
          alignSelf: "center"
        }}
      ></Image>
    </Container>
  );
};

const Container = styled.View`
  background-color: #000;
  color: #fff;
  height: 100%;
  align-self: flex-start;
  padding-left: 10;
  padding-right: 10;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  margin-top: 15
  margin-bottom: 10;
  width: 80%;
`;

export default OrderThanks;
