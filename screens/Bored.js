import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
  font-size: 20px;
`;

const Container = styled.View`
  align-items: center;
  background: #faf0e6;
  height: 100%;
`;

const APIButton = styled.TouchableHighlight`
  border-radius: 10px;
  text-transform: uppercase;
  background: #161616;
  padding: 5px;
  width: 70%;
  text-align: center;
  margin: 5px auto;
`;

const ApiButtonText = styled.Text`
  color: #fff;
  width: 100%;
`;

const ButtonContainer = styled.View`
  height: auto;
  background: #79b4b7;
  padding: 20px;
  text-align: center;
  margin: 2px;
  border-radius: 10px;
  border: 2px solid #000;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const NavButtonHome = styled.TouchableHighlight`
  border: 2px solid black;
  padding: 8px;
  border-radius: 10px;
  background-color: #79b4b7;
  margin-top: 10px;
`;

export const Bored = ({ navigation }) => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateActivity();
  }, [setActivity]);

  const generateActivity = () => {
    setLoading(true);
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator size='large' color='#999999' />;
  }

  return (
    <Container>
      <View>
        <Image
          source={{ uri: 'https://i.postimg.cc/hv4fbjC3/bored.png' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <ButtonContainer>
        <APIButton onPress={generateActivity}>
          <ApiButtonText>Give me something fun to do!</ApiButtonText>
        </APIButton>

        <QuoteText>Activity: {activity.activity}</QuoteText>
        <QuoteText>Type: {activity.type}</QuoteText>
      </ButtonContainer>

      <View>
        <NavButtonHome onPress={() => navigation.navigate('Home')}>
          <Text>TAKE ME HOME</Text>
        </NavButtonHome>
      </View>
    </Container>
  );
};
