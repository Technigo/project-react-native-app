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
                cleanHtml(data)
                setRecipes(data.recipes)
            })
    }

    const cleanHtml = (data) => {
        const datainstructions = data.recipes[0].instructions.replace('<ol>', '')
        let x = removeStringElements(datainstructions, '<ol>')
        x = removeStringElements(x, '</ol>')
        x = removeStringElements(x, '<li>')
        x = removeStringElements(x, '</li>')
        x = removeStringElements(x, '<ul>')
        x = removeStringElements(x, '</ul>')
        console.log(x)
        return x
    }

    const removeStringElements = (fullString, subString) => {
        let newString = fullString
        while (newString.includes(subString)) {
            newString = newString.replace(subString, '')
        } return newString
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
    width: 100%;
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

    return (
        recipes.map((recipe) => (
            <Container key={recipe.id}>
                {console.log(recipe.image)}
                <RecipeImage source={{ uri: recipe.image }} />
                <Headline>This is a recipe: {recipe.title}</Headline>
                {recipe.instructions && <Text>Instructions: {recipe.instructions}</Text>}
            </Container>
        ))
    )
}