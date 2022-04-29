import React from 'react'
import styled from 'styled-components/native'
// import { StyleSheet, Image } from 'react-native'

const Heading = styled.Text`
	display: flex;
	color: #eabd91;
	font-size: 32px;
	padding: 15px;
	position: absolute;
	text-align: center;
	position: absolute;
	top: 75px;
`

// const styles = StyleSheet.create({
// 	heading: {
// 		paddingTop: 20,
// 		width: 250,
// 		height: 250,
// 		backgroundColor: '#111111',
// 		position: 'absolute',
// 		top: 75,
// 	},
// })

const Header = () => {
	return (
		<Heading>Are you bored and need some inspiration?</Heading>
		// <Image style={styles.heading} source={require('../assets/header.svg')} />
	)
}

export default Header
