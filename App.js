import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, FlatList, Share } from "react-native";

const Title = styled.Text`
  font-size: 24px;
  margin: 5px;
  color: white;
`;

const HeaderBox = styled.View`
  font-size: 36px;
  flex: 4;
  background-color: black;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const InfoBox = styled.Text`
  font-size: 20px;
  color: white;
  margin: 10px;
  padding: 10px;
`;

const FooterBox = styled.View`
  font-size: 20px;
  flex: 1;
  background-color: hotpink;
  align-items: center;
  justify-content: center;
`;

const SearchField = styled.TouchableOpacity`
  height: 60px;
  width: auto;
  padding: 15px;
  border: 2px solid hotpink;
  border-radius: 20;
  background-color: white;
  color: black;
  margin: 40px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const List = styled.FlatList`
  margin: 15px;
  padding: 15px;
`;

const App = () => {
  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=20")
      .then((response) => response.json())
      .then((result) => setDog(result));
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Find cool dog facts here:",
        url: "https://expo.io/@theresehag/projects/project-react-native-app",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <HeaderBox>
        <Title>🐶 20 fun dog facts 🐶</Title>

        <List
          data={dog}
          keyExtractor={(item, index) => item.key}
          renderItem={({ item }) => (
            <View>
              <InfoBox> 🐶 {item.fact} </InfoBox>
            </View>
          )}
        />

        <SearchField onPress={onShare}>
          <Text>🐶 Share this app 🐶</Text>
        </SearchField>
      </HeaderBox>
      <FooterBox>
        <View>
          <Text>Created by: Therese Hagelin - Technigo Bootcamp -21</Text>
        </View>
      </FooterBox>
    </>
  );
};

export default App;
