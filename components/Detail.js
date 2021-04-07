import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
import { API_DETAIL } from '../reusable/urls'
import { FontAwesome } from '@expo/vector-icons'; 


import LinkShare from './LinkShare'

const Container = styled.ScrollView`
  flex: 1; 
  background-color: #000;
`

const Poster = styled.ImageBackground`
  width: 100%;
  height: 480px; 
`

const Gradient = styled(LinearGradient)`
  height: 100%;
`

const ContentContainer = styled.View`
  margin: 20px 8px 0 8px;
`

const MovieTitle = styled.Text`
  font-size: 33px;
  color: #fff;
  font-weight: bold; 
  padding-top: 10px;
`

const RaitingContainer = styled.View` 
  flex-direction: row;
  margin: -6px 0 0 5px; 
`

const Raiting = styled(MovieTitle)`
  font-size: 14px;
  color: #ff0000; 
  margin-right: 30px;
`

const ReleaseDate = styled(Raiting)`
  color: #C0C0C0;
`

const About = styled.Text`
  font-size: 18px;
  color: #fff; 
  padding-top: 20px;
`

const ShareButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 50;
`

const Detail = ({ route }) => {
  const [detailList, setDetailList] = useState('')
  const { itemID } = route.params

  useEffect(() => {
    fetch(API_DETAIL(itemID))
      .then(response => response.json())
      .then(data => setDetailList(data))
  }, [itemID])


  return (
    <Container>
      <Poster source={{ uri:`https://image.tmdb.org/t/p/w780/${detailList.backdrop_path}`}}>
        <Gradient
          colors={[
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,1)',
          ]}
        >
        </Gradient> 
        <ContentContainer>
          <MovieTitle>{detailList.original_title}</MovieTitle>
          <RaitingContainer>
            <Raiting>
              {detailList.vote_average}/10
            </Raiting>
            <ReleaseDate>
              {detailList.release_date}
            </ReleaseDate>
          </RaitingContainer>
          <About>{detailList.overview}</About>
          <ShareButton>
            <FontAwesome name="paper-plane-o" size={20} color="#fff" />
            <LinkShare hompageUrl={detailList.homepage}/>
          </ShareButton>
        </ContentContainer>
      </Poster>
    </Container>
   
  )
}


export default Detail