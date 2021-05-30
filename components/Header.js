import React from 'react'
import styled from 'styled-components/native'

const Title = styled.Text`
  margin-top: 15%;
	display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 3px #fdbaf8;	
`

export const Header = () => {
	return (
		<Title>My Todo List</Title>		
	)
}