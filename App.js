import React, { useState } from "react";
import styled from "styled-components/native";
import Header from "./components/Header";
import ChangeImage from "./components/ChangeImage";
import HomeScreen from "./screens/HomeScreen";

const API_KEY = "YWwm9H2VlQrVz9g0eOpGZdBRCzgYHoifUPhfqUWn";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: lawngreen;
  align-items: center;
`;

const random = (max) => Math.floor(Math.random() * max);

const App = () => {
  const [imgNumber, setImgNumber] = useState(random(100));
  const [query, setQuery] = useState("nebula");
  console.log(imgNumber);
  return (
    <Container>
      <Header title="Hello" />
      <ChangeImage
        text="sun"
        setImgNumber={setImgNumber}
        setQuery={setQuery}
        query={query}
        newQuery="sun"
        random={random}
      />
      <ChangeImage
        text="nebula"
        setImgNumber={setImgNumber}
        setQuery={setQuery}
        query={query}
        newQuery="nebula"
        random={random}
      />
      <ChangeImage
        text="galaxy"
        setImgNumber={setImgNumber}
        setQuery={setQuery}
        query={query}
        newQuery="galaxy"
        random={random}
      />
      <HomeScreen imgNumber={imgNumber} query={query} />
    </Container>
  );
};

export default App;
