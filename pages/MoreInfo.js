import React from "react";
import styled from "styled-components/native";

import { Image, Share } from "react-native";

export const MoreInfo = ({ navigation, navigation: { navigate } }) => {
  const title = navigation.getParam("title");
  const authors = navigation.getParam("authors");
  const categories = navigation.getParam("categories");
  const image = navigation.getParam("image");
  const description = navigation.getParam("description");
  const price = navigation.getParam("price");
  const currency = navigation.getParam("currency");

  // onShare Button
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `You must read that book: "${title}" written by: ${authors}`
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert(`You succesfully shared your favourite book "${title}"!`);
        }
      } else if (result.action === Share.dismissedAction) {
        alert("Shared dismissed!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
        <CTAButton
          onPress={() =>
            navigate("Review", { title: title, authors: authors, image: image })
          }
        >
          <ButtonText>LEAVE REVIEW</ButtonText>
        </CTAButton>
        <CTAButton>
          <ButtonText onPress={onShare}>SHARE</ButtonText>
        </CTAButton>
      </ContainerNoScroll>
      <ContainerNoScroll marginBottom>
        <Order
          onPress={() =>
            navigate("Order", {
              title: title,
              authors: authors,
              image: image,
              price: price,
              currency: currency
            })
          }
        >
          <ButtonText title marginBottom>
            ORDER
          </ButtonText>
        </Order>
      </ContainerNoScroll>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: #000;
  color: #fff;
  height: auto;
  align-self: flex-start;
  padding-left: 10;
  padding-right: 10;
  width: 100%;
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
  color: #fff;
  margin: auto auto;
  font-size: ${props => (props.title ? "22px" : "17px")};
`;

const CTAButton = styled.TouchableOpacity`
  margin-top: 20;
  width: 40%;
  height: 40;
  background-color: #00bfff;
  border-radius: 20;
`;

const Order = styled(CTAButton)`
  width: 90%;
  height: 60;
  background-color: #f56040;
`;

export default MoreInfo;
