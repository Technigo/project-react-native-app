import React from "react";
import styled from "styled-components/native";

import ShakeApi from "./components/ShakeApi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Description from "./components/Description";
import SwitchImage from "./components/SwitchImage";

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #d3e4cd;
`;

const QuoteContainer = styled.View`
  width: 95%;
  height: 28%;
  margin-top: 15px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: #adc2a9;
  border: 1px solid #99a799;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <SwitchImage />
        <Description />
        <QuoteContainer>
          <ShakeApi />
        </QuoteContainer>
        <Footer />
      </Container>
    </>
  );
};

export default App;
