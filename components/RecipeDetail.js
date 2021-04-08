import React from 'react';
import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native';
import RecipePage from '../screens/RecipePage';

const RecipeDetail = () => {
  const route = useRoute()
  return(
    <Container>
      <Title>
      {route.params.caption}
      </Title>
    </Container>
  )
}

export default RecipeDetail

const Container = styled.ScrollView`
  background-color: white;
  padding: 1px;
  padding-top: 30;
`

const Title = styled.Text`
  font-size: 24px;
  color: black;
  margin: 20px 0 0 5px;
`