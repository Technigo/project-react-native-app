import React from "react"
import styled from "styled-components/native"

import Data from "./components/Data"
import Shake from "./components/Shake"

const Container = styled.View`
  flex: 1;
  background-color: #d9cab3;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: #212121;
  margin-bottom: 20px;
`

const App = () => {
  // const [currentTab, setCurrentTab] = useState("Shake")

  return (
    <Container>
      {/* {currentTab === "Shake" ? <Shake /> : <Data />} */}
      <Title>Who is this Pokemon?</Title>
      {/* <Shake /> */}

      <Data />
    </Container>
  )
}

export default App
