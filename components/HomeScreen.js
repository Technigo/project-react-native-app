import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

import titleImage from '../assets/home-title-img.png';
import homeMainImage from '../assets/home-main-img.png';
import arrow from '../assets/arrow.png';


export const HomeScreen= () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreenContainer>
        <TitleImageContainer>
          <TitleImage source={titleImage} />
        </TitleImageContainer>

        <TitleImageContainer heightSetter>
          <TitleImage widthSetter style={styles.homeImage} source={homeMainImage} />
        </TitleImageContainer>

        <TitleText>MOOD BOOSTER</TitleText>

        <ContentText>
          Now when everything's remote and WFH rules, staying connected and motivated is key. 
          Pick a mood that reflects how you feel today and get some facts about why it's a instant booster!
        </ContentText>

        <ContentText bold>
          Share this fact with friends and add your personal touch with a text. Swipe and get started!
        </ContentText>

        <ArrowImageContainer>
          <ArrowImage source={arrow} />
        </ArrowImageContainer>
      </MainScreenContainer>
    </SafeAreaView>
  );
};

/*STYLED COMPONENTS*/
const MainScreenContainer = styled.View`
  padding-top: 12px;
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

  ${props => props.bold && css`
    font-weight: bold;
  `}
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
