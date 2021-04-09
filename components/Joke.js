import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'


const Container = styled.View`
  flex: 1;
  background-color: thistle;
  justify-content: center;
  align-items: center;
  `
const OracleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #833471;
  margin: 10px;
  `
const OracleImage = styled.Image`
  width: 400px;
  height: 300px;
  margin-left: 40px;
  `
export const RestartButton = styled.TouchableOpacity`
  background-color: #833471;
  border-radius: 10px;
  padding:20px;
  margin-top: 40px
  `
export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #f2f0f0;
  `

const Joke = ({navigation}) => {

  const [NewJoke, setNewJoke] = useState({});

  useEffect (()=> { 
    fetch('https://icanhazdadjoke.com/slack')
      .then (response => response.json())
      .then ((json) => { 
        setNewJoke(json.attachments[0])       
      });
  },[]);

    return(
        <Container>
          <OracleText>{NewJoke.fallback}🤣</OracleText>
          <OracleImage source={require('../assets/turtle.png')} />
           <LottieView source={require('../assets/confetti.json')} autoPlay/>
          <RestartButton onPress={() => navigation.navigate('Start')}>
            <ButtonText>Start</ButtonText>
          </RestartButton>
        </Container>
    )
}

export default Joke