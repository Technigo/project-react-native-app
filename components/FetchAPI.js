/* import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const DogView = styled.View`
    font-size: 24px;
    `;

    export const RandomDog = () => {
        const [dogs, setDogs] = useState([])  
        
            useEffect(() => {
                fetch('https://dog.ceo/api/breeds/image/random')
                .then((response) => response.json())
                .then((json) => setDogs(json.message))
            }, [] )
            
            return (
                <DogView className='dog'>
                  Hi
                </DogView>
            )
        } */