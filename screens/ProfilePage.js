import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FavouriteRecipe from '../components/FavoriteRecipe'

import background2 from '../assets/background2.jpg'

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
      <HomeImage source={background2}>
        <Logo>yummy</Logo>
        <Title>Hello, friend!</Title>
        <Title>Your Favourite Recipes</Title>
      </HomeImage>
      {data.length === 0 ? <Title>You do not have favourite recipes</Title> : <FavouriteRecipe data={data} />}
    </Container>
  )

}
export default ProfilePage

const Container = styled.ScrollView`
  background-color: #1D1E20;
  padding: 1px;
  position: relative;
`
const HomeImage = styled.ImageBackground`
  flex:1;
  width:100%
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: #6e8c6c;
`
const Logo = styled.Text`
  font-size: 26px;
  color: #c47b34;
  font-style: italic;
  font-weight: bold;
  margin: 40px 10px 20px 10px;
  text-align: center;
  font-family: Georgia;
`
const Title = styled.Text`
  font-size: 24px;
  color: white;
  margin: 10px;
  text-align: center;
`


