import React from 'react'
import {ActivityIndicator} from 'react-native'
import styled from 'styled-components/native' 

const Container = styled.View``

const Loading = () => {
    return (
        <Container>
            <ActivityIndicator size='large' color='#efefef'/> 
        </Container>
    )
}


export default Loading 