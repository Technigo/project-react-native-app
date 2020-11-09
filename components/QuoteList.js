import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, RefreshControl, SafeAreaView } from 'react-native';


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

export default function GetQuote() {
  const [quote, setQuote] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
  });
  
  {/*}
 const fetchQuotes = () => {
    fetch('https://api.kanye.rest')
      .then((res) => res.json()) 
      .then((quote) => {
        setQuote(quote)
      })
      .catch((error) => {
        console.error(error); 
      })
    };
      
useEffect(() => {
    onRefresh();
    fetchMovies();
}, []);
*/}

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >   
      <Container> 
        {/*{setQuote(quote)}*/}
       <Title>Kanye West Quotes </Title>
       <Title>Shake baby shake</Title>
       <Title>💅💅💅</Title>
      </Container>
    </ScrollView>
  </SafeAreaView>
  )
};