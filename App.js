import React, { useState } from "react";
import styled from "styled-components/native";
import ChangeImage from "./components/ChangeImage";
import HomeScreen from "./screens/HomeScreen";

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const Buttons = styled.View`
  position: absolute;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 30px;
`;

const spaceThings = ["saturn", "nebula", "galaxy", "sun"];
const random = (max) => Math.floor(Math.random() * max);

const App = () => {
  const [imgNumber, setImgNumber] = useState(random(100));
  const [query, setQuery] = useState("nebula");
  return (
    <Container>
      <HomeScreen
        imgNumber={imgNumber}
        query={query}
        setImgNumber={setImgNumber}
        random={random}
      />
      <Buttons>
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
      </Buttons>
    </Container>
  );
};

export default App;
