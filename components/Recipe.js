import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Flatlist } from 'react-native'

import { Container } from './Container'

export const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [instructions, setInstructions] = useState('');

    const API__KEY = '2879ac1c5ce2405aa25090a67795070c'
    const URL = `https://api.spoonacular.com/recipes/random/?apiKey=${API__KEY}&number=4`

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

    const Wrapper = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #FDE3D1;
    `
    const TextContainer = styled.View`
    flex: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    `
    const Text = styled.Text`
    color: #fff;
    font-size: 16px;
    padding: 10px;
    `
    const Headline = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    `
/*     const Item = ({ title, instructions }) => (
        <Container source={{ uri: recipe.image }}>
            <Headline>{title}</Headline>
            <Text>{instructions}</Text>
        </Container>
    )
    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            instructions={instructions} />
    )
 */
    /*

        <Flatlist
            data={recipes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    */

    return (
        <Wrapper>
            {recipes.map((recipe) => (
                <Container key={recipe.id} source={{ uri: recipe.image }}>
                    <TextContainer>
                        <Headline>{recipe.title}</Headline>
                        <Text>Instructions: {instructions}</Text>
                    </TextContainer>
                </Container>
            ))}
        </Wrapper>

    )
}