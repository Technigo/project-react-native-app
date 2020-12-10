import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

const FortuneText = styled.Text`
    font-size: 30px;
    color: white;
    margin-bottom: 20px;
    text-align: center;
`
const fortuneURL = "https://type.fit/api/quotes"

export const FortuneMessage = () => {
        const [fortune, setFortune] = useState("")

        const getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max))
        }

        const randomizeFortune = () => {
            fetch(fortuneURL)
                .then(response => response.json())
                .then(json => {

            const formattedArray = json.map(item => item.text)  
            const randomInt = getRandomInt(formattedArray.length)
            const randomFortune = formattedArray[randomInt]
            setFortune(randomFortune)
    }     
    )
}

    useEffect (randomizeFortune, [])

    return (
        <FortuneText>{fortune}</FortuneText> 
    )      
} 


