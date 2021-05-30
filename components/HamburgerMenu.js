import React, { useState } from 'react'
import styled from 'styled-components/native'
import Hamburger from 'hamburger-react'

export const HamburgerMenu = ({ navigation }) => {
	const [isOpen, setOpen] = useState(false)

	const handleDrawer = (navigation) => {
		if (!isOpen) {
			navigation.openDrawer
		} else {
			navigation.closeDrawer
		}
	}

	return (
		<Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>
	
	)
}