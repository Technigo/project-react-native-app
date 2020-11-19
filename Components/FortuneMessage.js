import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

const FortuneText = styled.Text`
font-size: 30px;
color: palevioletred;
margin-bottom: 20px;
text-align: center;
`
const fortuneURL = "https://type.fit/api/quotes"

export const FortuneMessage = () => {
    const [fortune, setFortune] = useState("")
    const [fortuneIndex, setFortuneIndex] = useState(0) 

    const updateIndex = () => {
    setFortuneIndex(fortuneIndex+1)
    }

    const randomizeFortune = () => {
        fetch(fortuneURL)

        .then(response => response.json())
        .then(json => {

        const formattedArray = json.map(item => item.text) 
        setFortune(formattedArray)
    }     
    )
}

    useEffect (randomizeFortune, [])


    return (
        <FortuneText>{fortune[fortuneIndex]}</FortuneText> 
)      
} 


