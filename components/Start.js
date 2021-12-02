import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { ShowTimeOutTip } from './ShowTimeOutTip'

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 24px;
	text-align: center;
	color: palevioletred;
`

export const Start = () => {
	return (
		<Container>
            <Title>⌛️⌛️⌛️</Title>
			<Title>Time for a time out?</Title>
			<Text>Shake your phone to get a time out tip!</Text>
            <ShowTimeOutTip />
		</Container>
	)
}
