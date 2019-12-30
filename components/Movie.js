import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View ``

const Text = styled.Text`
color: #fff;`

export const Movie = ({ movie }) => (
<Container>
    <Text>{movie.title}</Text>
    </Container>

)