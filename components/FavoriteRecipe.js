import React from 'react';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

const FavouriteRecipe = ({ data }) => {
  const navigation = useNavigation()
  return (
    <>
      {data.map((item) =>
        <Container key={item.recipeURI}>
          <Title>{item.recipeLabel}</Title>
          <Button onPress={() => navigation.navigate('Recipe', { caption: `${item.recipeURI}` })}>
            <ButtonText>Check recipe</ButtonText>
            <AntDesign name="rightcircle" color="white" size="16"/>
          </Button>
        </Container>
      )}
    </>
  )

}
export default FavouriteRecipe

const Title = styled.Text`
  font-size: 20px;
  color: white;
  margin: 5px;
  text-align: left;
`
const Container = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 15px 0;
  border-bottom-width: 3px;
  border-bottom-color: #6e8c6c;
`

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin: 0 5px 0 5px;
`

const Button = styled.TouchableOpacity`
  width: 130px;  
  height: 40px;
  font-size: 16px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
`