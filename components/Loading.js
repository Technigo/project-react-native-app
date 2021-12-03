import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native"; // Core components

const LoadingContainer = styled.View`
  background-color: #000;
  height: 750px;
  justify-content: center;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="orange" />
    </LoadingContainer>
  );
};

export default Loading;
