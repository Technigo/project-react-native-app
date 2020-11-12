import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

const DogView = styled.View`
    flex: 1;
    width: 100%;
    ` 

const RandomDogButton = styled.TouchableOpacity`
  background-color: pink;
  border-radius: 50px;
  padding: 10px; 
`

const ButtonText = styled.Text`
  font-size: 20px;
`

const BottomText = styled.Text`
font-size: 32px;
` 

export const RandomDog = () => {
    const [dogs, setDogs] = useState()  
    const [count, setCount] = useState(0)
    const onPress = () => {
      setCount(count + 1)
    }
    
        useEffect(() => {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((json) => { 
                setDogs(json.message)
            })
        }, [] )
    
            
        return (
            <>
                <DogView className='dog'>
                    <image source={dogs.message}/>
                </DogView>
                    <RandomDogButton onPress={onPress}>
                        <ButtonText>Get a cute dog</ButtonText>
                    </RandomDogButton>
                <BottomText>{count}</BottomText>
            </>
        )
}
