import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons'

const AddFavouriteButton = ({ recipe }) => {
  const value = {
    recipeLabel: recipe.label,
    recipeURI: recipe.uri,
  }
  const storage_Key = recipe.uri

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storage_Key, jsonValue)
      alert('Recipe is saved to favourites')
    } catch (e) {
      alert('Failed to save the recipe to favourites')
    }
  }
  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      alert('Recipe is removed from favourites')
      return true;
    }
    catch (exception) {
      alert('Failed to remove the recipe from favourites')
      return false;
    }
  }

  const checkFavourite = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.includes(recipe.uri)) {
        setAddFavourite(true)
      } else {
        setAddFavourite(false)
      }
    } catch (error) {
    }

  }

  useEffect(() => {
    checkFavourite()
  }, [])

  const [addFavourite, setAddFavourite] = useState()

  const addFavouriteToggle = () => setAddFavourite(!addFavourite)

  return (
    <Button
      onPress={() => {
        if (addFavourite) {
          addFavouriteToggle()
          removeData(storage_Key)
        } else {
          addFavouriteToggle()
          storeData(value)
        }
      }}
    >
      <Ionicons
        name="star"
        size={30}
        color={addFavourite ? "#c47b34" : "white"}
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