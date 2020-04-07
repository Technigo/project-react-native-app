import 'react-native-gesture-handler';
import * as React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

const TitleText = styled.Text`
  color: #f9aac2;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
`;

const StartButton = styled.TouchableOpacity`
    background-color: #f9aac2;
    width: auto;
    height: auto;
    text-align: center;
    border-radius: 100px;
    margin: 20px;
  `;

const ButtonText = styled.Text`
  color: #FFDEE9;
  font-size: 40px;
  padding: 10px 20px;
`;

const EmojiContainer = styled.View`
  flex: 1;
  flex-direction: row;
` 
const EmojiBox = styled.View`
    height: auto;
    width: auto;
`

const EmojiBaby = styled.Text`
  padding-top: 20px;
  font-size: 70px;
`
const EmojiMommy = styled.Text`
  font-size: 100px;
` 

export const Start = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#75ffe0', '#B5FFFC', '#B5FFFC', '#FFDEE9', '#f9aac2']}
      style={{flex: 1, alignItems: 'center'}}
    >
      <TitleText>Save baby Ducky</TitleText>
      <StartButton onPress={() => navigation.navigate('Game')}>
        <ButtonText>START</ButtonText>
      </StartButton>
      <EmojiContainer>
        <View style={[EmojiBox, {transform: [
          { rotateX: "-15deg" },
          { rotateZ: "-15deg" }
        ]}]}>
          <EmojiBaby>🐣</EmojiBaby>
        </View>
        <View style={[EmojiBox, {transform: [
          { rotateX: "15deg" },
          { rotateZ: "15deg" }
        ]}]}>
          <EmojiMommy>🦆</EmojiMommy>
        </View>
      </EmojiContainer>
    </LinearGradient>
  )
}