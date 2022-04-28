import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Image } from 'react-native'

// const Heading = styled.Image`
// 	// display: flex;
// 	// position: absolute;
// 	// text-align: center;
// 	top: 3em;
// `

const styles = StyleSheet.create({
	heading: {
		paddingTop: 20,
		width: 250,
		height: 250,
		backgroundColor: '#111111',
	},
})

const Header = () => {
	return <Image style={styles.heading} source={require('../assets/header.svg')} />
}

export default Header
