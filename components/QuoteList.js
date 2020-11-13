import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, RefreshControl, SafeAreaView, Alert } from 'react-native';

import kanye from '../assets/icon.png';

const TopContainer = styled.View`
  flex: 1;
  background-color: #8F221C;
  justify-content: space-between;
  align-items: center;
  padding: 70px;
`

const Title = styled.Text`
  font-size: 20px;
  color: white;
`

const Image = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 20px;
`    

export default function QuoteList() {
  const [newQuote, setNewQuote] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  // Function to fetch the quote
  const fetchQuote = () => {
    fetch('https://api.kanye.rest')
      .then((res) => res.json())
      .then((res) => {
        // Stop the refresh animation
        setRefreshing(false);

        // Set the new quote to be Alerted later
        setNewQuote(res.quote);
      })
      .catch((error) => console.error(error));
  };

  // When the pulldown is used, we:
  //  - show the refresh animation
  //  - fetch the new quote
  const onRefresh = React.useCallback(() => {
    setRefreshing(true); // but when true go ahead and refresh (and generate new quote).
    fetchQuote();
  });
  // When newQuote changes, we want to do this, hence the dependency

  useEffect(() => {
    if(newQuote !=('')){
      Alert.alert(JSON.stringify(newQuote));
    }
  }, [newQuote]);
  
  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TopContainer>
          <Title>Kanye West quotes</Title>
          <Title>Pull me down!</Title>
          <Image source={kanye} />
        </TopContainer>
      </ScrollView>
    </SafeAreaView>
  )
};
