import React from 'react'
import styled from 'styled-components/native'

/* Idea is to use Flatlist here to render a bunch of recipes
that means I will have to send in props here:
{recipetext}. */

export const Recipe = () => {
    const Container = styled.View`
    flex: 1.5;
    justify-content: center;
    align-items: center;
    background: #FDE3D1;
    margin: 10px;
    `
    const RecipeImage = styled.Image`
    width: 50px;
    height: 50px;
    `
    const Text = styled.Text`
    color: #000;
    font-size: 20px;
    `

    const RecipeArray = [
        {
            name: 'Tacos',
            type: 'Easy to fail',
            image: require('../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')
        },
        {
            name: 'Pancakes',
            type: 'Crowdpleaser',
            image: require('../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')
        },
        {
            name: 'Pizza',
            type: 'Crowdpleaser',
            image: require('../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')
        },
        {
            name: 'Oysters',
            type: 'Not for picky eaters',
            image: require('../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')
        },
        {
            name: 'Pasta',
            type: 'Piece of cake!',
            image: require('../assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')
        }
    ]

    return (
        RecipeArray.map((recipe) => (
            <>
            <Container key={recipe.name}>
            <RecipeImage source={recipe.image}/>
                <Text>This is a recipe: {recipe.name}</Text>
                <Text>Tag: {recipe.type}</Text>
            </Container>
            </>
        ))
    )
}