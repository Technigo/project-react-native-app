import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, FlatList, Share } from 'react-native'


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  margin: 5px;
  color: white;
`

const HeaderBox = styled.View`
  font-size: 36px;
  flex: 1;
  background-color: hotpink;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  `

  const InfoBox = styled.Text`
  font-size: 20px;
  color: black;
  margin: 10px;
  padding: 10px;
  `


  const FooterBox = styled.View`
  font-size: 20px;
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  `

const SearchField = styled.TouchableOpacity`
  width: 180;
  height: auto;
  padding: 10px
  border: 2px solid black;
  background-color: hotpink;
  margin: 40px;  
  flex: 1;
  justify-content: center;
  align-items: center;
  `

const Detail = styled.View`
  flex: 1;
  `
const List = styled.FlatList`
margin: 10px;
padding: 10px;
`
  
const App = () => {
  

  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=20')
    .then(response => response.json())
    .then(result => setDog(result))

  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Find cool dog facts here:',
        url: ''
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
    <HeaderBox>
      <Title>🐶 20 fun dog facts 🐶</Title>
      
      <List
      key = {dog}
      data = {dog}
      renderItem = {({item}) => 
      <View>
        <InfoBox key= {item.fact}> 🐶 {item.fact} </InfoBox>
        <SearchField 
        onPress = {onShare}><Text>🐶Share this genious app🐶</Text>
        
        </SearchField>
       
      </View>
    
    }
       />

      

    </HeaderBox>
  );
};
          

export default App
