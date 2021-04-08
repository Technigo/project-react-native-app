import React, {useState} from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
// import { Button } from './components/Button';
import HeaderContainer from './components/HeaderContainer'
import { Text, StyleSheet, Button, View, TouchableOpacity, ImageBackground} from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;
// const HeaderContainer = styled.View`
//   background-color: #222222;
//   flex: 1;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   `

// const HeaderText = styled.Text`
//   font-size: 14px;
//   color: white;

// `

const BottomContainer = styled.View`
  flex: 6;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const ImageContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ff2255;
  width: 100%;
  height: 100%;
`

const MainText = styled.Text`
  font-size: 80px;
`
const OrangeText = styled(MainText)`
  color: #ff2255;
`
const CustomButton = styled.TouchableOpacity`
  background-color: #ff2255;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
`

const App = () => {

  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1517783755800-0344536f0ec5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1344&q=80')
  const [name, onChangeName] = React.useState('')

  return (
    <Container>
      <HeaderContainer 
        name={name}
        onChangeName={onChangeName}
        />

      <BottomContainer>

      {/* <ImageContainer
        source={{
          uri: imageUrl,
        }}
        ></ImageContainer> */}
        {/* <SensorComponent></SensorComponent> */}
        <Text style={styles.text}>Count: {count} </Text>
        <MainText>Hi</MainText>
        <OrangeText>you {name}</OrangeText>
        <Button
          title="Press me"
          onPress={() => setCount(count + 1)}
        />
        <CustomButton onPress={() => setCount(count + 1)}>
          <Text>Try pressing here</Text>
        </CustomButton>
      </BottomContainer>
    </Container>
  );
};

export default App;



const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  }
})
