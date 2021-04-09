import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import { API_URL } from '../reusable/urls'
import { Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Container = styled.ScrollView`
  background-color: black;  
`

const Poster = styled.ImageBackground`
  height: ${windowHeight};
  width: ${windowWidth};
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
` 

const DetailListContainer = styled.View`
  width: 100%;
  align-items: center;
`

const Image = styled.Image`
  width: 250px;
  height: 340px;
  border-radius: 12px;
  opacity: 0.9;
`

const ImageOverlay = styled.View`
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 170px;
`

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000; 
  text-align: center;
`

 const Button = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? "#ccc" : "red")};
  border: none;
  border-radius: 20px;
  padding: 10px;
` 

const Icon = styled.View`
  width: 20%;
  position: absolute;
  top: 50%;
  right: -20px;
`

const HomeScreen = ({ navigation }) => {
  const [movieList, setMovieList] = useState([])

  useEffect (() => {
   fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovieList(data.results))
  }, [])

  return (
    <Container horizontal={true}>
     {movieList.map(movie =>
        <Poster 
        
          blurRadius={5}
          key = {movie.id}
          source={{ uri:`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}}
        > 
          <DetailListContainer>
            <ImageOverlay>
              <Button 
                onPress={() => {
                  navigation.navigate('Detail', {
                    itemID: `${movie.id}`                
                  })
                }}
              >
                <Title>{movie.original_title.toUpperCase()}</Title>
              </Button>
            </ImageOverlay> 
            <Image source={{ uri:`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}}/>
            <Icon>
              <AntDesign name="rightcircleo" size={44} color="white" /> 
            </Icon>
          </DetailListContainer>  
        </Poster> 
      )}  
    </Container>
  )
}

export default HomeScreen 