import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

// = Styled components
const ShakeView = styled.View`
  background-color: magenta;
  justify-content: center;
  align-items: center;
`;

const ShakeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: yellow;
`;

export const Tip = () => {
	const [todaysTip, setTodaysTip] = useState('');
	let tips = [
		"Go for a walk",
		"Take a bath",
		"SNHK (sitt ned och håll käften)",
		"Call a friend",
		"Do nothing",
		"Stretch your body"]
}