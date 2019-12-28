import React from "react";
import styled from "styled-components/native";

import { Text, Button, View, Image } from "react-native";
// import { Press } from "./Press";

export const MoreInfo = ({ navigation }) => {
  const title = navigation.getParam("title");
  const authors = navigation.getParam("authors");
  const categories = navigation.getParam("categories");
  const image = navigation.getParam("image");
  const description = navigation.getParam("description");

  return (
    <Container>
      <Image
        source={image}
        style={{
          width: 100,
          height: 150,
          marginVertical: 30
        }}
      ></Image>
      <Span>Title:</Span>
      <Title title>{title}</Title>

      <Span>Authors:</Span>
      <Title title>{authors}</Title>

      <Span>Category:</Span>
      <Title>{categories}</Title>

      <Span>Description:</Span>
      <Title>{description}</Title>
      <ContainerNoScroll>
        <CTAButton>
          <ButtonText>LEAVE REVIEW</ButtonText>
        </CTAButton>
        <CTAButton>
          <ButtonText>SHARE</ButtonText>
        </CTAButton>
      </ContainerNoScroll>
      <ContainerNoScroll marginBottom>
        <Order>
          <ButtonText white title marginBottom>
            ORDER
          </ButtonText>
        </Order>
      </ContainerNoScroll>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #000;
  color: #fff;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: 10;
  padding-right: 10;
  width: ${props => (props.widthSmaller ? "80%" : "100%")};
`;

const ContainerNoScroll = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${props => (props.marginBottom ? 20 : 0)};
`;

const Title = styled.Text`
  font-size: ${props => (props.title ? "15px" : "12px")};
  color: #fff;
  flex: 2;
  margin-bottom: ${props => (props.marginBottom ? 0 : 2)};
  line-height: 17;
`;

const Span = styled(Title)`
  color: #00bfff;
`;

const ButtonText = styled.Text`
  color: ${props => (props.white ? "#fff" : "#000")};
  margin: auto auto;
  font-size: ${props => (props.title ? "20px" : "18px")};
`;

const CTAButton = styled.TouchableOpacity`
  margin-top: 20;
  width: 40%;
  height: 30;
  background-color: #ffc000;
`;

const Order = styled(CTAButton)`
  width: 90%;
  height: 40;
  background-color: #ff4000;
`;

export default MoreInfo;
