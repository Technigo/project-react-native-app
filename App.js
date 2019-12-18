import React, { useEffect, useState, Component } from "react";
import styled from "styled-components/native"
import { Image, View } from 'react-native';

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+crossfit&per_page=15&page=1"


const App = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, [])
     

  return(
    <Container>
     
          return (
            <View>
              <Image 
                source={{uri: 'https://api.pexels.com/v1/search?query=example+crossfit&per_page=15&page=1'}}
                style={{width: 400, height: 400}} />
            </View>
          )}
        }
    </Container>
  )   
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

export default App