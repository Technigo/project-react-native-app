import React from 'react';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HomeImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const HomeText = styled.Text`
  position: absolute;
  color: yellow;
  top: 55px;
  margin: 0 30px 0 40px;
  font-size: 17px;
  font-family: Courier;
  font-weight: bold;
  line-height: 20px;
`;

const MenuButton = styled.TouchableOpacity`
  position: absolute;
  top: 550px;
  border: 2px solid white;
  border-radius: 25px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
  padding: 15px;
  font-weight: bold;
`;

export const Home = ({ navigation }) => {
  return (
    <HomeContainer>
       <HomeImage source={require('../assets/lost.jpg')}/>
       <HomeText>
          Hi there! {"\n"}
          ...you look a bit lost! {"\n"}
          {"\n"}
          Want some advice in life? {"\n"} 
          {"\n"} 
          Or a bit of help with that vital "YES" or "NO" decision? {"\n"}
          {"\n"}
          Or perhaps just for Chuck Norris to cheer you up simply by being...Chuck Norris? {"\n"}
          {"\n"}
          WE ARE HERE FOR YOU!
        </HomeText>
        <MenuButton onPress={() => navigation.openDrawer()}>
          <ButtonText>SELF HELP MENU</ButtonText>
        </MenuButton>
    </HomeContainer>
  );
};
