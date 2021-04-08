import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import GoBackButton from '../components/GoBackButton'
import RecipeDetail from '../components/RecipeDetail'

const RecipePage = () => {
  return (
    <Container>
      <Title>
        This is recipe RecipePage
      </Title>
    <RecipeDetail/>
    <GoBackButton/>
    </Container>
  )
}
export default RecipePage


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