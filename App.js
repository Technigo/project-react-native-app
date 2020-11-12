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

const spaceThings = ["saturn", "nebula", "galaxy"];
const random = (max) => Math.floor(Math.random() * max);

const App = () => {
  const [imgNumber, setImgNumber] = useState(random(100));
  const [query, setQuery] = useState("nebula");
  console.log(imgNumber);
  return (
    <Container>
      <Header title="Hello" />
      {spaceThings.map((spaceThing) => (
        <ChangeImage
          text={spaceThing}
          setImgNumber={setImgNumber}
          setQuery={setQuery}
          query={query}
          newQuery={spaceThing}
          random={random}
        />
      ))}

      <HomeScreen imgNumber={imgNumber} query={query} />
    </Container>
  );
};

export default App;
