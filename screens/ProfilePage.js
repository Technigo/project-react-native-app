import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FavouriteRecipe from '../components/FavoriteRecipe'

const ProfilePage = () => {
  const [favouriteRecipes, setFavouriteRecipes] = useState()
  const [data, setData] = useState([])

  const importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      setFavouriteRecipes(result)
      return result

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    importData()
  }, [])

  useEffect(() => {
    if (favouriteRecipes) {
      const newArray = favouriteRecipes.map((item) => {
        return JSON.parse(item[1])
      })
      //console.log(newArray)
      setData(newArray)
    }

  }, [favouriteRecipes])

  return (
    <Container>
      <Logo>yummy</Logo>
      <Title>Profile</Title>
      <Title>Favourite Recipes</Title>
      {data.length === 0 ? <Title>You do not have favourite recipes</Title> : <FavouriteRecipe data={data} />}
    </Container>
  )

}
export default ProfilePage

const Title = styled.Text `
  font-size: 24px;
  color: white;
  margin: 10px;
  text-align: center;
`
const Container = styled.ScrollView `
  background-color: black;
  padding: 1px;
  padding-top: 30;
`

const Logo = styled.Text`
  font-size: 26px;
  color: #c47b34;
  font-style: italic;
  font-weight: bold;
  margin: 10px 10px 20px 10px;
  text-align: center;
  font-family: Georgia;
`