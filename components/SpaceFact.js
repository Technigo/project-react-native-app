import React, { useState } from 'react'
import { 
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
 } from 'react-native'
import styled from 'styled-components/native'

export const SpaceFact = () => {

  const SpaceFactArray = [
    {
      fact: 'SPACE IS COMPLETELY SILENT. There is no atmosphere in space, which means that sound has no medium or way to travel to be heard.'
   },
    {
      fact: 'THE HOTTEST PLANET IN OUR SOLAR SYSTEM IS 450°C. Venus is the hottest planet in the solar system and has an average surface temperature of around 450°C. Did you know that Venus is not the closest planet to the sun? That is Mercury. You would think that Mercury would then be the hottest, but Mercury has no atmosphere (which regulates temperature), resulting in big fluctuations.'
    },
    {
      fact: 'A FULL NASA SPACE SUIT COSTS $12,000,000. While the entire suit costs a cool $12m, 70% of that cost is for the backpack and control module. However, the space suits that NASA uses were built in 1974. If these were priced by today, they would cost an estimated 150 million dollars!'
    },
    {
      fact: 'THE SUN’S MASS TAKES UP 99.86% OF THE SOLAR SYSTEM. The Sun accounts for 99.86% of the mass in our solar system with a mass of around 330,000 times that of Earth. Did you know that the Sun is made up of mostly hydrogen (three quarters worth) with the rest of its mass attributed to helium. If the Sun had a voice would it be high and squeaky from all that helium?'
    },
    {
      fact: 'ONE MILLION EARTHS CAN FIT INSIDE THE SUN. The Sun is large enough that approximately 1.3 million Earths could fit inside (if squashed in) or if the Earths retained their spherical shape then 960,000 would fit. But can you visualise that number of Earths? '
    },
    {
      fact: 'THERE ARE MORE TREES ON EARTH THAN STARS IN THE MILKY WAY. There are about three trillion trees on Planet Earth, and between 100-400 billion stars, approximately, in the galaxy.'
    },
    {
      fact: 'THE SUNSET ON MARS APPEARS BLUE. Just as colors are made more dramatic in sunsets on Earth, sunsets on Mars, according to NASA,  would appear bluish to human observers watching from the red planet. Fine dust makes the blue near the Suns part of the sky much more visibilke, while normal daylight makes the Red Planets familiar rusty dust color the most perceptible to the human eye.'
    },
    {
      fact: 'THERE ARE MORE STARS IN THE UNIVERSE THAN GRAINS OF SANDS ON EARTH. The universe extends far beyond our own galaxy, The Milky Way, which is why scientists can only estimate how many stars are in space. However, scientists estimate the universe contains approximately 1,000,000,000,000,000,000,000,000 stars, or a septillion.   While no one can actually count every single grain of sand on the earth, the estimated total from researchers at the University of Hawaii, is somewhere around seven quintillion, five hundred quadrillion grains. That is an awfully big sand castle!'
   },
    {
      fact: 'ONE DAY ON VENUS IS LONGER THAN ONE YEAR. Venus has a slow axis rotation which takes 243 Earth days to complete its day. The orbit of Venus around the Sun is 225 Earth days, making a year on Venus 18 days less than a day on Venus.'
    },
    {
      fact: 'THERE IS A PLANET MADE OF DIAMONDS. There’s a planet made of diamonds twice the size of earth The "super earth," aka 55 Cancri e, is most likely covered in graphite and diamond. Paying a visit to that planet would probably pay for the $12 million dollar space suit needed to get there!'
    },
  ]

  const [spacefact, setSpacefact] = useState({})

  const getSpacefact = () => {
    const theSpacefact = SpaceFactArray[Math.floor(Math.random() * SpaceFactArray.length)]
    setSpacefact(theSpacefact)
  }

  return (
     <ScreenBackground source={require('../assets/rocket-background.png')}>
      <FactContainer>
        <FactButton
        key={spacefact.fact}>
          <Text>{spacefact.fact}</Text>
        </FactButton>
      </FactContainer>
        <ClickButton onPress={() => { getSpacefact()}}>
          <Text>Take off</Text>
        </ClickButton>
    </ScreenBackground>
  )
}

const ScreenBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
`

const FactContainer = styled.View`
flex: 1;
max-width: 300px;
padding: 30px;
`

const FactButton= styled.TouchableOpacity`
justify-content: center;
align-items: center;
text-align: center;
`

const ClickButton = styled.TouchableOpacity`
background-color: #fff;
padding: 10px;
border: 2px solid #C8553D;
margin: 15px;
width: 240px;
border-radius: 8px;
box-shadow: 2px 2px 6px #959695;
`
