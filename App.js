import React, { useEffect, useState }  from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import styled from 'styled-components/native'


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const App = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = useState([false]);

 
const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  wait(2000).then(() => {
    setRefreshing(false);
    setData(!data); //Toggles the state between true/false
  });
});

useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    })
    .catch((error) => {
      console.error(error);
    });
}, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Title>🐶 Random Dogs 🐕 </Title>
      </Header>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
       <Image 
              source={{ uri: `${data.message}` }} 
              style={{ width: 300, height: 300 }} 
              // style={styles.image}
            />
        <Cta>Swipe Down ⬇️ </Cta>
        <Cta>Get a new dog!🐶</Cta>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // image: {
  //   width:100,
  //   height: 100,
  // }
});


const Header = styled.View`
background-color: black;  
justify-content: center;
align-items: center;
width: 100%;
height: 400px;
margin-top: 40px;
padding: 5px; 
flex: 1;
`
const Title = styled.Text`
font-size: 30px;
color: white;
margin: 20px;
`

const Cta = styled.Text`
font-size: 25px;
color: white;
margin: 20px;
`

export default App;