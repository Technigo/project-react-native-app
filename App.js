import React from "react";
import styled from "styled-components/native";

// import ButtonApi from "./components/ButtonApi";
import ShakeApi from "./components/ShakeApi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Description from "./components/Description";
import SwitchImage from "./components/SwitchImage";

const Container = styled.View`
  padding: 10px;
  align-items: center;
  border: 1px solid red;
`;

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Description />
        <SwitchImage />
        <ShakeApi />
      </Container>
      <Footer />
    </>
  );
};

export default App;
