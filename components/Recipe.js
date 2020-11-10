import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
/* import RNShake from 'react-native-shake' */
/* 
RNShake.addEvenListener('ShakeEvent', () => {}) */
/* Idea is to use Flatlist here to render a bunch of recipes
that means I will have to send in props here:
{recipetext}. */


export const Recipe = () => {

    const [recipes, setRecipes] = useState([]);

    const API__KEY = '2879ac1c5ce2405aa25090a67795070c'
    const URL = `https://api.spoonacular.com/recipes/random/?apiKey=${API__KEY}&number=1`

    const getRandomRecipes = () => {
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.recipes)
                setRecipes(data.recipes)
            })
    }

    useEffect(() => {
        getRandomRecipes()
    }, [])

    const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #FDE3D1;
    margin: 10px;
    `
    const RecipeImage = styled.Image`
    flex: 2;
    height: 200px;
    width: 200px;
    margin: 10px;
    `
    const Text = styled.Text`
    color: #000;
    font-size: 20px;
    padding: 10px;
    `
    const Headline = styled.Text`
    color: #000;
    font-size: 25px;
    font-weight: 600;
    `
/* 
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
    ] */

    return (
        recipes.map((recipe) => (
            <>
                <Container key={recipe.id}>
                    <RecipeImage source={recipe.image} />
                    <Headline>This is a recipe: {recipe.title}</Headline>
                    <Text>Tag: {recipe.instructions}</Text>
                </Container>
            </>
        ))
    )
}