import React, { useState } from "react";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import { Image } from "react-native";

export const Review = ({ navigation, navigation: { navigate } }) => {
  const [dropdownValue, setDropdownValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();

  const title = navigation.getParam("title");
  const authors = navigation.getParam("authors");
  const image = navigation.getParam("image");

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
        </ContainerNoScroll>
      </ContainerNoScroll>
      <InputField
        placeholder="Leave your review here..."
        value={descriptionValue}
        onChangeText={(itemValue, itemIndex) => setDescriptionValue(itemValue)}
        multiline={true}
      />
      <Span>Rate the book:</Span>
      <RNPickerSelect
        selectedValue={dropdownValue}
        onValueChange={(itemValue, itemIndex) => setDropdownValue(itemValue)}
        InputAccessoryView={() => null}
        items={[
          { label: "1 star", value: "1" },
          { label: "2 stars", value: "2" },
          { label: "3 stars", value: "3" },
          { label: "4 stars", value: "4" },
          { label: "5 stars", value: "5" }
        ]}
        style={pickerStyle}
      />
      <ReviewButton
        onPress={() =>
          navigate("ReviewThanks", {
            image: image,
            dropdownValue: dropdownValue,
            descriptionValue: descriptionValue
          })
        }
      >
        <ButtonText title>LEAVE REVIEW</ButtonText>
      </ReviewButton>
    </Container>
  );
};

const pickerStyle = {
  inputIOS: {
    color: "white",
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12
  },
  inputAndroid: {
    color: "white"
  },
  placeholderColor: "white",
  underline: { borderTopWidth: 0 }
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
  margin: 0;
`;

const InputField = styled.TextInput`
  border-color: #00bfff;
  background-color: white;
  border-width: 1px;
  width: 100%;
  height: 150;
  padding-left: 5;
  margin: 0 auto;
  margin-bottom: 10;
  text-align-vertical: top;
`;

const ReviewButton = styled.TouchableOpacity`
  width: 90%;
  height: 60;
  background-color: #00bfff;
  border-radius: 20;
  margin: 0 auto;
  margin-top: 30;
`;

const ButtonText = styled.Text`
  color: #fff;
  margin: auto auto;
  font-size: ${props => (props.title ? "22px" : "17px")};
`;

export default Review;
