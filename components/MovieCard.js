import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Swal from 'sweetalert2'



const CardContainer = styled.View`
  padding-bottom: 20px;
`
const MovieImage = styled.Image`
height: 220px;
width: 150px;
`
const TextContainer = styled.View`
display: none;
`

const MovieText = styled.Text`
color: white;
`



const MovieCard = ({ title, release_date, poster_path, overview }) => {

  const onPressCard = () => {
    Swal.fire({
      title: `<h3 style="font-family: arial; font-size: 20px; color: white; margin: 0; ">${title}</h3>`,
      html: `<p style="font-family: arial; font-size: 16px; color: white; margin: 0; ">${overview}</p>`,
      background: 'black',
      confirmButtonText: 'Back to movies'
    }
    )
  }

  return (
    <>
    <TouchableOpacity onPress={onPressCard}>
      <CardContainer>
        <MovieImage
          source={{uri: `https://image.tmdb.org/t/p/w342${poster_path}`}}
        />
        <TextContainer>
          <MovieText>{title}</MovieText>
          <MovieText>Released {release_date}</MovieText>
        </TextContainer>
      </CardContainer>
    </TouchableOpacity>
    </>
  )
}

export default MovieCard