import React, {useState} from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
// import { Button } from './components/Button';
// import Header from './components/Header'
import { Text, StyleSheet, Button } from 'react-native';

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
      {/* <Header title='Hello' /> */}
      <SensorComponent></SensorComponent>
      <Text style={styles.text}>Coundffddt: {count} </Text>
      {/* <Button>ORDER</Button> */}
      <Button
        title="Press me"
        onPress={() => setCount(count + 1)}
      />
    </Container>
  );
};

export default App;



const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  }
})
