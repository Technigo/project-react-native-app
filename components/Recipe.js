import React, { useEffect, useState } from 'react'

import { Container, Wrapper, TextContainer, Button } from './Containers'
import { Headline } from './Text'

export const Recipe = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);
    const [instructions, setInstructions] = useState('');

    const API__KEY = '2879ac1c5ce2405aa25090a67795070c'
    const URL = `https://api.spoonacular.com/recipes/random/?apiKey=${API__KEY}&number=3`

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [])

    const cleanHtml = (data) => {
        const datainstructions = data.recipes[0].instructions.replace('<ol>', '')
        let x = removeStringElements(datainstructions, '<ol>')
        x = removeStringElements(x, '</ol>')
        x = removeStringElements(x, '<li>')
        x = removeStringElements(x, '</li>')
        x = removeStringElements(x, '<ul>')
        x = removeStringElements(x, '</ul>')
        x = removeStringElements(x, '<p>')
        x = removeStringElements(x, '</p>')
        return x
    }

    const removeStringElements = (fullString, subString) => {
        let newString = fullString
        while (newString.includes(subString)) {
            newString = newString.replace(subString, '')
        } return newString
    }

    const getRandomRecipes = () => {
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setRecipes(data.recipes)
                setInstructions(cleanHtml(data))
            })
    }

    useEffect(() => {
        getRandomRecipes()
    }, [])

    const navigateToPage = (recipe) => {
        navigation.navigate('Recipe-details', {
            heading: recipe.title,
            instructions: instructions,
            image: recipe.image
        })
    }

    return (
        <Wrapper>
            {recipes.map((recipe) => (
                <Button
                    key={recipe.id}
                    onPress={() => navigateToPage(recipe)}>
                    <Container source={{ uri: recipe.image }}>
                        <TextContainer>
                            <Headline>{recipe.title}</Headline>
                        </TextContainer>
                    </Container>
                </Button>
            ))}
        </Wrapper>
    )
}