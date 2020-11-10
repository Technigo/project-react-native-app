import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const HomeScreen= () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreenContainer>
        <TitleImageContainer>
          <TitleImage source={require('../assets/home-title-img.png')} />
        </TitleImageContainer>

        <TitleText>MOOD BOOSTER</TitleText>
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
`;

const TitleImage = styled.Image`
  height: 100%;
  width: 240px;
  margin: auto;
`;

const TitleText = styled.Text`
  font-size: 20px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
});
