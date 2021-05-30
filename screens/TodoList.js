import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

// This is the main container for this screen
const TopContainer = styled.View`
	flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
`

const ListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #0000FF;
`

const StyledTitle = styled.Text`
	margin: 10px;
	width: 80%;
	text-align: center;
	font-size: 34px;
	font-weight: bold;
	color: #0000FF;
	text-shadow: 2px 2px 3px #fdbaf8;
`

const StyledText = styled.Text`
	margin: 10px;
	width: 80%;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	color: #fff;
	text-shadow: 2px 2px 3px #fdbaf8;
`

const GoBackButton = styled.View`
  margin: 40px 20px; 
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: #2196F3;
  border-color: #fdbaf8;
  justify-content: center;
  align-items: center; 
`
const GoBackButtonText = styled.Text`
	font-weight: bold;	  
	color: #fff;
`

export const TodoList = ({ route, navigation }) => {
  const { todoList } = route.params
  
  return (
    <>
      <TopContainer>
        <StyledTitle>Your todo list</StyledTitle>
      </TopContainer>
      <ListContainer>
        {todoList.map(item => {
          return (
            <StyledText>{item.todo}</StyledText>
          )
        })}
        <TouchableOpacity 
					title="GO BACK" 
					onPress={() => navigation.goBack()}>
					<GoBackButton>
						<GoBackButtonText>GO BACK</GoBackButtonText>
					</GoBackButton>
				</TouchableOpacity>
      </ListContainer>
    </>
  )
}
