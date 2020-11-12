import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, RefreshControl, SafeAreaView, Alert } from 'react-native';
import kanye from '../assets/icon.png';


const TopContainer = styled.View`
  flex: 1;
  background-color: #A13430;
  justify-content: space-between;
  align-items: center;
  padding: 70px;
`

const BottomContainer = styled.View`
  flex: 1;
  background-color: #FEFF00;
  justify-content: space-between;
  align-items: center;
  `

const Title = styled.Text`
  font-size: 20px;
  color: #309DA1;
`

const Image = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 20px;
`
// Executes code after delay. This function allows us to set a timeout on the spinner 
// when site is refreshed/pulled down. It is invoked in the onRefresh function. The wait-function
// tells the onRefresh function to run spinner for 1 second. After that the refresh is completed. 
const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

export default function QuoteList() {
  const [newQuote, setNewQuote] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  // We want to start with no quote, so we initatie with false.
  
  const onRefresh = React.useCallback(() => {
        setRefreshing(true); // but when true go ahead and refresh (and generate new quote).
        wait(1000).then(() => setRefreshing(false)); // Page is refreshing, spinner spins for 1 second.
        // Then set to false after refreshed. Ready to be refreshed again.
        setNewQuote(''); // A new quote is set. 
  });
  
  useEffect(() => {
    function fetchQuote() {
      fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(res => setNewQuote(res.quote)) // A new quote is stored in setNewQuote.
        .catch(error => console.error(error));
    }
    
      fetchQuote(); 
      //We call the function and fetch a new quote. Since wrapped in useEffect, the function 
      // is only run when called.
    });



  const quoteAlert = () => {
    setTimeout(() => {
    Alert.alert(JSON.stringify(newQuote))
    }, 1000) 
    // The time matches the wait-time in the onRefresh function. If longer, then box pops
    // up before spinner has ended. And vice versa.
    onRefresh() 
    //If I delete this one, the spinner never stops. Now it stops after 1 second as set 
    // as an argument in the wait function above.
  }
    
  return (
    <SafeAreaView> 
     <ScrollView>
      <TopContainer> 
        <RefreshControl refreshing={refreshing} onRefresh={quoteAlert} />
         <Title>Kanye West quotes</Title>
         <Title>Pull me down!</Title>
         <Image source={kanye} />
         </TopContainer>
    </ScrollView>
    <BottomContainer>
      <Title>Hello</Title>
      </BottomContainer>
  </SafeAreaView>
  )
};
