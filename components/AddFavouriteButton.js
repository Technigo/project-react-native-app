import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons'

const AddFavouriteButton = ({recipe}) => {

  const value = {
    recipeLabel: recipe.label,
    recipeURI: recipe.uri,
  }

  const storage_Key = recipe.uri


  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storage_Key, jsonValue)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }
useEffect(()=> {

})
  const importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys)
      if(keys.includes(recipe.uri)){
        console.log(true) 
      } else console.log(false)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=> {
    importData()
  }, [])

  const [addFavourite, setAddFavourite] = useState(importData())

  const addFavouriteToggle = () => setAddFavourite(!addFavourite)

  return (
    <Button
      //onPress={addFavouriteToggle}
      onPress={()=> {
        addFavouriteToggle()
        storeData(value)}
      }
    >
      <Ionicons
        name="star"
        size={30} 
        color={addFavourite ? "#FFA500" : "white"}
      />
    </Button>
  )

}

export default AddFavouriteButton
const Button = styled.TouchableOpacity`
  position: absolute;
  top:0;
  left: 60px;
  border: white 1px solid;
  width: 50px;  
  height: 50px;
  font-size: 16px;
  border-radius: 20px;
  padding: 1px;
  margin: 5px;
  justify-content: center;
  align-items:center;
  background: rgba(33, 32, 32, 0.2);
`