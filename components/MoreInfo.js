import React from "react";
import { useSelector } from "react-redux";
import * as WebBrowser from "expo-web-browser";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  justify-content: center;
  margin: 50px;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: 170px;
  height: 40px;
  background-color: #1a3aaa;
  text-align: center;
  border-radius: 10px;
  padding: 5px 0;
  margin: 50px auto;
`;

const InfoText = styled.Text`
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  margin: 0 auto;
`;

const MoreInfo = () => {
  const store = useSelector((store) => store.paintings.singleArt);

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(`${store.objectURL}`);
  };

  return (
    <Container>
      <InfoText>Title: {store.title}</InfoText>
      <InfoText>Author: {store.artistDisplayName}</InfoText>
      <InfoText>Year: {store.objectEndDate}</InfoText>
      <InfoText>Authors bio: {store.artistDisplayBio}</InfoText>
      <InfoText>Medium: {store.medium}</InfoText>
      <Button title="" onPress={() => handleOpenWithWebBrowser()}>
        <ButtonText>More info from MET</ButtonText>
      </Button>
    </Container>
  );
};

export default MoreInfo;
