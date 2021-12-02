import React from 'react'
import styled from 'styled-components/native'
import { ShowTimeOutTip } from './ShowTimeOutTip'

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 54px;
	text-align: center;
	color: palevioletred;
`

const MyAppText = styled.Text`
	font-size: 24px;
	text-align: center;
`

const TipContainer = styled.Text`
	margin-top: 50px;
`

export const Start = () => {
	return (
		<Container>
			<Title>Time out!</Title>
			<Title>⌛️⌛️⌛️</Title>
			<MyAppText>Shake your phone to get a time out tip!</MyAppText>
			<TipContainer>
	            <ShowTimeOutTip />
			</TipContainer>
		</Container>
	)
}
