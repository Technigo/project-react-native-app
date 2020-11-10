import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';




const MainText = styled.Text`
  font-size: 24px;
`;

const OrangeMainText = styled(MainText)`
  color: #ff2255;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: #222222;
  justify-content: center;
  align-items: center;
`;

const TopHeader = styled.Text`
  font-size: 48px;
  color: #efefef;
`;

const BottomContainer = styled.View`
  flex: 3;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const BottomText = styled.Text`
  font-size: 32px;
  color: #1f1f1f;
`;

const App = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
    console.log('incremented');
  }

  return (
    <Container>
      <TopContainer>
        <TopHeader>
          Counter
        </TopHeader>
      </TopContainer>
      <BottomContainer>
        <TouchableOpacity onPress={onIncrement}>
          <Text>Add +1</Text>
        </TouchableOpacity>
        <BottomText>
          Total: {count}
        </BottomText>
      </BottomContainer>
    </Container>
  )
}

export default App
