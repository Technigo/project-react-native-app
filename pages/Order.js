import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Button, View, Image, Picker } from "react-native";

export const Order = ({ navigation, navigation: { navigate } }) => {
  const [dropdownValue, setDropdownValue] = useState();
  const [name, setName] = useState();

  const title = navigation.getParam("title");
  const authors = navigation.getParam("authors");
  const image = navigation.getParam("image");
  const price = navigation.getParam("price");
  const currency = navigation.getParam("currency");

  return (
    <Container>
      <ContainerNoScroll row>
        <Image
          source={image}
          style={{
            width: 100,
            height: 150,
            marginVertical: 30
          }}
        ></Image>
        <ContainerNoScroll center paddingLeft widthSmaller>
          <Span>Title:</Span>
          <Title>{title}</Title>
          <Span>Authors:</Span>
          <Title>{authors}</Title>
          <Span>Price:</Span>
          <Title>
            {price} {currency}
          </Title>
        </ContainerNoScroll>
      </ContainerNoScroll>
      <InputField
        placeholder="Your name and surname"
        value={name}
        onChangeText={event => setName(event)}
      />
      <InputField placeholder="Your address" />
      <InputField placeholder="Your phone number" keyboardType="numeric" />
      <Span center centerContainer>
        Payment method:
      </Span>
      <Select
        mode="dropdown"
        selectedValue={dropdownValue}
        onValueChange={(itemValue, itemIndex) => setDropdownValue(itemValue)}
      >
        <Select.Item label="Card" value="card" />
        <Select.Item label="Invoice" value="invoice" />
        <Select.Item label="Gift card" value="gift" />
      </Select>
      <OrderButton
        onPress={() => navigate("OrderThanks", { name: name, image: image })}
      >
        <ButtonText title marginBottom>
          ORDER
        </ButtonText>
      </OrderButton>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: #000;
  color: #fff;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: 10;
  padding-right: 10;
  width: 100%;
`;

const ContainerNoScroll = styled.View`
  width: ${props => (props.widthSmaller ? "80%" : "100%")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  margin-bottom: ${props => (props.marginBottom ? 20 : 0)};
  align-self: ${props => (props.center ? "center" : "flex-start")};
  padding-left: ${props => (props.paddingLeft ? 20 : 0)};
`;

const Title = styled.Text`
  font-size: ${props => (props.title ? "15px" : "12px")};
  color: #fff;
  margin-bottom: 4;
  width: 80%;
`;

const Span = styled(Title)`
  color: #00bfff;
  text-align: ${props => (props.center ? "center" : "left")};
  margin: ${props => (props.centerContainer ? "0 auto" : "0")};
`;

const InputField = styled.TextInput`
  border-color: #00bfff;
  background-color: white;
  border-width: 1px;
  width: 70%;
  height: 35;
  padding-left: 5;
  margin: 0 auto;
  margin-bottom: 10;
`;

const Select = styled.Picker`
  background-color: white;
  flex: 1;
  width: 70%;
  border-color: #00bfff;
  margin: 0 auto;
  margin-top: 10;
`;

const OrderButton = styled.TouchableOpacity`
  width: 90%;
  height: 60;
  background-color: #f56040;
  border-radius: 20;
  margin: 0 auto;
  margin-top: 30;
`;

const ButtonText = styled.Text`
  color: #fff;
  margin: auto auto;
  font-size: ${props => (props.title ? "22px" : "17px")};
`;

export default Order;
