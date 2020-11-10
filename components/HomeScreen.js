import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import styled, { css } from 'styled-components/native';


export const HomeScreen= () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreenContainer>
        <TitleImageContainer>
          <TitleImage source={require('../assets/home-title-img.png')} />
        </TitleImageContainer>

        <TitleImageContainer heightSetter>
          <TitleImage widthSetter style={styles.homeImage} source={require('../assets/home-main-img.png')} />
        </TitleImageContainer>

        <TitleText>MOOD BOOSTER</TitleText>

        <ContentText>
          Now when everything's remote and WFH rules, staying connected and motivated is key! 
          Pick a mood that reflects how you feel today and get some facts about why it is a instant boost!
        </ContentText>

        <ContentText>
          Share this fact with friends and add your personal touch with a text! Swipe and get started!
        </ContentText>

        <ArrowImageContainer>
          <ArrowImage source={require('../assets/arrow.png')} />
        </ArrowImageContainer>
      </MainScreenContainer>
    </SafeAreaView>
  );
};

/*STYLED COMPONENTS*/
const MainScreenContainer = styled.View`
  padding-top: 20px;
  background-color: white;
`;

const TitleImageContainer = styled.View`
  margin: auto;
  width: 90%;
  height: 100px;

  ${props => props.heightSetter && css`
    height: 200px;
  `}
`;

const TitleImage = styled.Image`
  height: 100%;
  width: 240px;
  margin: auto;

  ${props => props.widthSetter && css`
    width: 330px;
    margin-top: 10px;
  `}
`;

const TitleText = styled.Text`
  font-size: 25px;
  margin: auto;
  font-family: Verdana;
  border: 2px solid #99dddd;
  padding: 20px 5px 5px 5px;
  z-index: 2;
`;

const ContentText = styled.Text`
  font-size: 14px;
  width: 80%;
  margin: auto;
  margin-top: 10px;
`;

const ArrowImageContainer = styled.View`
  width: 40%;
  margin: auto;
`;

const ArrowImage = styled.Image`
  width: 100%;
  height: 20px;
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
});
