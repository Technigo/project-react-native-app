import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import GoBackButton from '../components/GoBackButton'
import RecipeDetail from '../components/RecipeDetail'

const RecipePage = () => {
  return (
    <Container>
      <RecipeDetail />
      <GoBackButton />
    </Container>
  )
}
export default RecipePage


const Container = styled.ScrollView`
  padding: 1px;
  background: black;
`
