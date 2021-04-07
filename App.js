import React, {useState} from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
// import { Button } from './components/Button';
import { Text, StyleSheet } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;


const App = () => {

  const [count, setCount] = useState(0);

  return (
    <Container>
      <SensorComponent></SensorComponent>
      {/* <Button>Click here</Button> */}
      <Text style={styles.text}>Count: {count} </Text>
    </Container>
  );
};

export default App;



const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  }
})
