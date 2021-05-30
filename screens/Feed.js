import React, { useState } from 'react'
import { Platform, Button, TouchableOpacity, Keyboard } from 'react-native'
import styled from 'styled-components/native'

import { HamburgerMenu } from '../components/HamburgerMenu'
import { Header } from '../components/Header'
import { AddTodo } from '../components/AddTodo'
//import { RadioButton } from '../components/RadioButton'

// This is the main container for this screen
const FeedContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: red;
`
const HeaderContainer = styled.View`
  width:100%;	
	display: flex;
	margin-bottom: 50px;
	flex-direction: row;
	justify-content: space-around;
	background-color: white;
`

const TodoContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000FF;
  width: 100%;
`

// const ButtonContainer = styled.View`
//   align-self: flex-start;
//   background-color: green;
//   width: 20%;
// `

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation }) => {

  return (
    <FeedContainer>
      <HeaderContainer>
        {/* Here is an example of how to open/toggle the drawer via javascript */}
        <Button 
          title="Menu" 
          onPress={() => navigation.openDrawer()} 
          
        />
        {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
        {/* <HamburgerMenu
          navigation={navigation} 
          onPress={() => navigation.openDrawer()} /> */}
        <Header />
      </HeaderContainer>
      <TodoContainer> 
        <AddTodo />
      </TodoContainer>
    </FeedContainer>
  )
}
