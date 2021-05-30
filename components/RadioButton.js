import React from "react"
import { View, TextInput, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  display: flex;
	height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
	background-color: red;
`
const Item = styled.View`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-bottom: 10px;
`

const Label = styled.Text`
  position: absolute;
	top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`
const RadioInput = styled.TextInput`
	background-color: white;
  width: 25px;
  height: 25px;
  margin-right: 10px;
	z-index: 1;
`


export const RadioButton = ({ type, setType }) => {
	const categories= [
			'Work',
			'Home',
			'Fun'    
	]

	const onTypeChanged = (event) => {
		setType(event.target.value)
	}

	return (
		<Wrapper>
			<Item>
			{categories.map(category => {
				<Label>{category}
					<RadioInput
						name="radio"
						type="radio"
						value={type}
						onChange={onTypeChanged}
					>
					</RadioInput>
				</Label>
			})}
			</Item>
		</Wrapper>
	)
}

