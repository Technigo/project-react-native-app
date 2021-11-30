import React from "react";
import styled from "styled-components/native";

// import ButtonApi from "./components/ButtonApi";
import ShakeApi from "./components/ShakeApi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Description from "./components/Description";

const Container = styled.View`
  display: flex;
  height: 100vh;
  background-color: papayawhip;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Description />
      <ShakeApi />
      <Footer />
    </Container>
  );
};

export default App;
